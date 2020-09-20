import React from "react";
import styled from "styled-components";

const LayoutDiv = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ddd;
`;

const Layout = (props) => {
    return (
        <LayoutDiv>
            {props.children}
        </LayoutDiv>
    );
};

export default Layout;