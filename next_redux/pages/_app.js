import wrapper from "../store";
import React from "react";

function App({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}

export default wrapper.withRedux(App);
