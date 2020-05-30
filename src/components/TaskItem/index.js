
import React, { Component } from 'react';
import styled from 'styled-components';
import { Text, Delete } from '../../styled/action';
import { GUID } from '../../helper';




const TaskItemStyle = styled.div`
  width: 175px;
  max-height: 100px;
  border: 1px solid purple;
  padding: 5px;
  margin: 5px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;


function drag(ev) {
    ev.dataTransfer.setData("cardId", ev.target.id);
    ev.dataTransfer.dropEffect = "move";
  }

export const TasksItems = ({ task, index, removeCardHandler }) => {
  return (
    <TaskItemStyle
      key={GUID()}
      id={GUID()}
      draggable
      onDragStart={(ev) => drag(ev)}
    >
      <Text>{task}</Text>{" "}
      <Delete
        onClick={() => {
          removeCardHandler(task, index);
        }}
      >
        x
      </Delete>
    </TaskItemStyle>
  );
};
