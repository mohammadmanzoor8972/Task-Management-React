import React from "react";
import "./styles.css";
import {createGlobalStyle} from "styled-components";
import styled from "styled-components";


export default function App() {
  const data = ["Task 1", "Task 2", "Task 3"];
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    <Tasks/>
    <button onClick={()=>{

    }}>+ Add another Tasks</button>
    </div>
  );
}


const TaskListStyled = styled.div`
width: 120px;
border: 2px solid black;
padding: 10px;
margin: 5px;
`

const Tasks =()=>{
  const [task, setTask] = React.useState([]);
  return(
<div>
<TaskListStyled>
<h4>Task 1</h4>
 {task && task.map(item=><TasksItems task={item}/>)

 }
 
  <button onClick={()=>{
    const p = prompt("Enter Title");
    setTask([...task, p])
    }}>+ Add a Card</button>
    
</TaskListStyled>
</div>
  )
}

const TaskItemStyle = styled.div`
width: 100px;
max-height: 100px;
border: 1px solid black;
padding: 5px;
margin: 2px;
`

const TasksItems =({task})=>{
  return(
    <TaskItemStyle>
    {task}
    </TaskItemStyle>
  )
}