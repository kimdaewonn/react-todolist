import React from "react";
import styled from "styled-components";
import { useState } from "react";

const ModalBox = styled.div`
  width: 800px;
  height: 300px;
  background: #d1e1ff;
  border-radius: 5px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: ${props => props.sendToggle ? "none" : "flex"};
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

const Modal = ({sendToggle}) => {
  // console.log(props.sendToggle);
  const [list, setList] = useState([]);
  const [newItem, setNewItem] = useState("");
  // console.log(newItem);

  const handleAddItem = () => {
    setList([...list, newItem]);
    setNewItem("");
  };

  return (
    <>
      <ModalBox sendToggle={sendToggle}>
        <div className="modal-form">
          <input
            className="modal-input"
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
          <button className="input-button" onClick={handleAddItem}>
            Add
          </button>
        </div>
      </ModalBox>

      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default Modal;
