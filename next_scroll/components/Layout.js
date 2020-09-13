import React from "react";
import Header from "./Header";
import styled from "styled-components";

const LayoutDiv = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ddd;
`;

const Layout = (props) => {
  return (
    <LayoutDiv>
      <Header />
      {props.children}
    </LayoutDiv>
  );
};

export default Layout;
