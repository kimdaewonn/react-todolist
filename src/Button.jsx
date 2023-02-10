import React from "react";
import styled from "styled-components";
import { useState } from "react";
import Modal from "./Modal";

const Btn = styled.div`
  width: 200px;
  height: 100px;
  background: #000;
  color: #fff;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  cursor: pointer;
  margin-bottom: 20px;
`;

const Button = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <Btn
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        모달 toggle
      </Btn>
      <Modal sendToggle={toggle}></Modal>
    </>
  );
};

export default Button;
