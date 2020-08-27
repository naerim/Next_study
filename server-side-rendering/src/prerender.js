import fs from "fs";
import path from "path";
import { renderPage, prerenderPages } from "./common";

// renderPage: 페이지를 렌더링하는 함수
// prerenderPages: 미리 렌더링할 페이지 목록

for (const page of prerenderPages) {
  const result = renderPage(page);
  // 페이지를 미리 렌더링해서 dust 폴더 밑에 저장함.
  fs.writeFileSync(path.resolve(__dirname, `../dist/${page}.html`), result);
}
