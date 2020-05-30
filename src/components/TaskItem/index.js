
import React, { Component } from 'react';
import styled from 'styled-components';


const Text = styled.div``;

function drag(ev) {
    ev.dataTransfer.setData("cardId", ev.target.id);
    ev.dataTransfer.dropEffect = "move";
  }

export const TasksItems = ({ task, index, removeCardHandler }) => {
  return (
    <TaskItemStyle
      key={task + "_text"}
      id={"task_" + new Date().getTime().toString()}
      draggable
      onDragStart={() => drag(event)}
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
