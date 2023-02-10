import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Main = () => {
  return (
    <>
      <h1>Main 페이지입니다.</h1>
      <Button />
      <Link to="/modal" className="modal">
        모달페이지
      </Link>
      <Link to="/button" className="button">
        버튼페이지
      </Link>
    </>
  );
};

export default Main;
