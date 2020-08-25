import React from "react";
import ReactDom from "react-dom";
import App from "./App";

const initialData = window.__INITIAL_DATA__; // 서버로부터 전달된 초기 데이터를 가져옴

ReactDom.hydrate(
  <App pages={initialData.page} />,
  document.getElementById("root")
);
