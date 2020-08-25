import React, { useState, useEffect } from "react";
import Home from "./Home";
import About from "./About";
import styled from "styled-components";

const App = ({ pages }) => {
  const [page, setPage] = useState(pages);

  useEffect(() => {
    // 뒤로가기 버튼을 클릭하면 onpopstate 함수 호출됨
    window.onpopstate = (e) => {
      setPage(e.state);
    };
  }, []);

  const onChangePage = (e) => {
    const newPage = e.target.dataset.page;
    window.history.pushState(newPage, "", `/${newPage}`);
    setPage(newPage);
  };

  const PageComponent = page === "home" ? Home : About;

  return (
    <Container>
      <button data-page="home" onClick={onChangePage}>
        Home
      </button>
      <button data-page="about" onClick={onChangePage}>
        About
      </button>
      <PageComponent />
    </Container>
  );
};

const Container = styled.div`
  background-color: #aaaaaa;
  border: 1px solid blue;
`;

export default App;
