import express from "express";
import fs from "fs";
import path from "path";
import { renderToString } from "react-dom/server";
import React from "react";
import App from "./App";
import * as url from "url";
import { ServerStyleSheet } from "styled-components";
import { renderPage, prerenderPages } from "./common";

const app = express();

const prerenderHtml = {};
for (const page of prerenderPages) {
  const pageHtml = fs.readFileSync(
    path.resolve(__dirname, `../dist/${page}.html`),
    "utf8"
  );
  prerenderHtml[page] = pageHtml;
}

app.use("/dist", express.static("dist"));
app.get("/favicon.ico", (req, res) => res.sendStatus(204));
app.get("*", (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const page = parsedUrl.pathname ? parsedUrl.pathname.substr(1) : "home";

  const initialData = { page }; // 클라이언트에게 전달할 초기 데이터

  // 미리 렌더링된 페이지가 아닌 경우에만 새로 렌더링한다.
  const pageHtml = prerenderPages.includes(page)
    ? prerenderHtml[page]
    : renderPage(page);
  const result = pageHtml.replace(
    "__DATA_FROM_SERVER__",
    JSON.stringify(initialData)
  );

  res.send(result);
});
app.listen(3000);
