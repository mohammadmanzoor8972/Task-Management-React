import React from "react";
import styled from "styled-components";
import { Container } from "./styled/container";
import { Root } from "./styled/root";
import ApplicationTitle from "./components/Header/TaskHeader";
import { Tasks } from "./components/Task";
import { AddButton } from "./styled/action";
import { GUID } from "./helper";

const TaskContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export default function App() {

  const [task, setTask] = React.useState([]);
  const prompt = window.prompt;

  return (
    <>
      <Root />
      <Container>
        <ApplicationTitle>Tavisca Task Management</ApplicationTitle>
        <TaskContainer>
          {task && task.map(item => <Tasks title={item} key={GUID()}/>)}
          <AddButton
            onClick={() => {
              const p = prompt("Enter Title");
              if (p) {
                setTask([...task, p]);
              }
            }}
          >
            + Add another Task(s)
          </AddButton>
        </TaskContainer>
      </Container>
    </>
  );
}
