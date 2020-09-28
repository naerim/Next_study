import wrapper from "../store";
import React from "react";
import Link from "next/link";
import styled from "styled-components";

function App({ Component, pageProps }) {
  return (
    <div>
      <Menu>
        <Link href="/">
          <LinkStyle>Home</LinkStyle>
        </Link>
        <Link href="/Counting">
          <LinkStyle>Count</LinkStyle>
        </Link>
        <Link href="/TodoList">
          <LinkStyle>Todo</LinkStyle>
        </Link>
      </Menu>

      <Component {...pageProps} />
    </div>
  );
}

const Menu = styled.div`
  margin: 20px;
`;

const LinkStyle = styled.a`
  margin: 10px;
`;

export default wrapper.withRedux(App);
