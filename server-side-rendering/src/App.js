import React, { useState, useEffect } from "react";
import Home from "./Home";
import About from "./About";

const App = ({ pages }) => {
  const [page, setPage] = useState(page);

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

  const PageComponent = pages === "home" ? Home : About;

  return (
    <div className="container">
      <button  onClick={onChangePage}>
        Home
      </button>
      <button data-page="about" onClick={onChangePage}>
        About
      </button>
      <PageComponent />
    </div>
  );
};

export default App;
