import React from "react";
import styled from "styled-components";
import { Container } from "./styled/container";
import { Root } from "./styled/root";
import ApplicationTitle from "./components/Header/TaskHeader"

export default function App() {
  return (
   <>
   <Root/>
   <Container>
    <ApplicationTitle>Tavisca Task Management</ApplicationTitle>
    Hello
   </Container>
   </>
  );
}
