import express from "express";
import fs from "fs";
import path from "path";
import React from "react";
import * as url from "url";
import { prerenderPages } from "./common";
import lruCache from "lru-cache";
import { ServerStyleSheet } from "styled-components";
import App from "./App";
import { renderToNodeStream } from "react-dom/server";
import { Transform } from "stream";

const createCacheStream = (cacheKey, prefix, postfix) => {
  const chunks = [];
  return new Transform({
    transform(data, _, callback) {
      chunks.push(data);
      callback(null, data);
    },
    flush(callback) {
      const data = [prefix, Buffer.concat(chunks).toString(), postfix];
      ssrCache.set(cacheKey, data.join(""));
      callback();
    },
  });
};

const ssrCache = new lruCache({
  max: 100, // 최대 100개의 페이지를 캐싱
  maxAge: 1000 * 60, // 각 아이템은 60초 동안 캐싱됨
});

const app = express();

const prerenderHtml = {};
for (const page of prerenderPages) {
  const pageHtml = fs.readFileSync(
    path.resolve(__dirname, `../dist/${page}.html`),
    "utf8"
  );
  prerenderHtml[page] = pageHtml;
}

const html = fs
  .readFileSync(path.resolve(__dirname, "../dist/index.html"), "utf8")
  .replace("__STYLE_FROM_SERVER", "");

app.use("/dist", express.static("dist"));
app.get("/favicon.ico", (req, res) => res.sendStatus(204));
app.get("*", (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const cacheKey = parsedUrl.path;
  if (ssrCache.has(cacheKey)) {
    console.log("캐시 사용");
    res.send(ssrCache.get(cacheKey));
    return;
  }

  const page = parsedUrl.pathname ? parsedUrl.pathname.substr(1) : "home";
  const initialData = { page }; // 클라이언트에게 전달할 초기 데이터

  const isPrerender = prerenderPages.includes(page);
  const result = (isPrerender ? prerenderHtml[page] : html).replace(
    "__DATA_FROM_SERVER__",
    JSON.stringify(initialData)
  );

  if (isPrerender) {
    ssrCache.set(cacheKey, result);
    res.send(result);
  } else {
    const ROOT_TEXT = '<div id="root">';
    const prefix = result.substr(
      0,
      result.indexOf(ROOT_TEXT) + ROOT_TEXT.length
    );
    const postfix = result.substr(prefix.length);
    res.write(prefix);

    const sheet = new ServerStyleSheet();
    const reactElement = sheet.collectStyles(<App pages={page} />);
    const renderStream = sheet.interleaveWithNodeStream(
      renderToNodeStream(reactElement)
    );

    const cacheStream = createCacheStream(cacheKey, prefix, postfix);
    cacheStream.pipe(res);
    renderStream.pipe(cacheStream, { end: false });
    // renderStream.pipe(res, { end: false });
    renderStream.on("end", () => {
      res.end(postfix);
    });
  }
});
app.listen(3000);
