import React, { Component } from 'react';
import styled from 'styled-components';
import { primaryColor, primaryColorLight } from '../../styled/theme';
import { Delete, AddCardButton } from '../../styled/action';
import { TasksItems } from '../TaskItem';


const TaskListStyled = styled.div`
  width: 200px;
  border: 1px solid ${primaryColor};
  margin: 5px;
`;

const Title = styled.div`
  display: flex;
  font-weight: 800;
  padding: 10px;
  background-color: ${primaryColorLight};
  margin-bottom: 5px;
  justify-content: space-between;
`;


export const Tasks = ({ title }) => {
    const [task, setTask] = React.useState(() => []);
  
    const removeCardHandler = (item, index) => {
      const cnf = confirm("Do you want to remove card ?");
  
      if (cnf) {
        let data = [...task];
        data.splice(index, 1);
        setTask(data);
      }
    };

    const removeTaskHandler = (event) => {
      const cnf = confirm("Do you want to remove task ?");
  
      if (cnf) {
        event.target.parentElement.parentElement.remove();
      }
    };

    function allowDrop(ev) {
        ev.preventDefault();
      }

      function drop(ev) {
        ev.preventDefault();
        let el = ev.target;
        var data = ev.dataTransfer.getData("cardId");
        if (ev.target.draggable || ev.target.tagName == "BUTTON") {
          el = ev.target.parentElement;
        }
        el.prepend(document.getElementById(data));
      }
      
  
    return (
      <div>
        <TaskListStyled>
          <Title>
            <Text>{title}</Text>{" "}
            <Delete
              onClick={() => {
                removeTaskHandler();
              }}
            >
              x
            </Delete>
          </Title>
          <div
            onDrop={() => {
              drop(event);
            }}
            onDragOver={() => {
              allowDrop(event);
            }}
          >
            {task &&
              task.map((item, index) => (
                <TasksItems
                  draggable
                  task={item}
                  index={index}
                  key={item}
                  removeCardHandler={removeCardHandler}
                />
              ))}
          </div>
          <AddCardButton
            onClick={() => {
              const p = prompt("Enter Title");
              if (p) {
                setTask([...task, p]);
              }
            }}
          >
            + Add a Card
          </AddCardButton>
        </TaskListStyled>
      </div>
    );
  };
  