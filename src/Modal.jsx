import React from "react";
import styled from "styled-components";

const ModalBox = styled.div`
  width: 800px;
  height: 300px;
  background: skyblue;
  border-radius: 5px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: ${(props) => (props.sendToggle ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

const Modal = (props) => {
  console.log(props.sendToggle);
  return <ModalBox sendToggle={props.sendToggle}>Todolist</ModalBox>;
};

export default Modal;
