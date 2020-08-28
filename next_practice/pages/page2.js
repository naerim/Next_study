import Router from "next/router";
import { callApi } from "../src/api";

// getInitialProps 함수 정의
Page2.getInitialProps = async ({ query }) => {
  // const { sayHello } = await import("../src/sayHello");
  // console.log(sayHello());
  const text = query.text || "none";
  const data = await callApi();
  return { text, data };
};

export default function Page2({ text, data }) {
  return (
    <div>
      <button onClick={() => Router.push("/page1")}>page1으로 이동</button>
      <p>this is home page2</p>
      <p>{`text: ${text}`}</p>
      <p>{`data is ${data}`}</p>
    </div>
  );
}
