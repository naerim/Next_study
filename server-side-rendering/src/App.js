import React, { useState, useEffect } from "react";
import Icon from "./icon.png";
import Home from "./Home";
import About from "./About";
import styled from "styled-components";

const fetchUsername = () => {
  const userNames = ["mike", "june", "jamie"];
  return new Promise((resolve) => {
    const username = userNames[Math.floor(Math.random() * 3)];
    setTimeout(() => resolve(username), 100);
  });
};

const App = ({ pages }) => {
  const [page, setPage] = useState(pages);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    // 뒤로가기 버튼을 클릭하면 onpopstate 함수 호출됨
    window.onpopstate = (e) => {
      setPage(e.state);
    };
  }, []);

  useEffect(() => {
    fetchUsername().then((data) => setUsername(data));
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
      <PageComponent username={username} />
      <img src={Icon} />
    </Container>
  );
};

const Container = styled.div`
  background-color: #aaaaaa;
  border: 1px solid blue;
`;

export default App;
