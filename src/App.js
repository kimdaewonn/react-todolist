import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Button from "./Button";
import Main from "./Main";
import Modal from "./Modal";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/button" element={<Button />}></Route>
          <Route path="/modal" element={<Modal />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
