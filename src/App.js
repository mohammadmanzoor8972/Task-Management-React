import React from "react";
import styled from "styled-components";
import { Container } from "./styled/container";
import { Root } from "./styled/root";
import ApplicationTitle from "./components/Header/TaskHeader";

const TaskContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export default function App() {

  const [task, setTask] = React.useState([]);

  
  return (
    <>
      <Root />
      <Container>
        <ApplicationTitle>Tavisca Task Management</ApplicationTitle>
        <TaskContainer>

        </TaskContainer>
      </Container>
    </>
  );
}
