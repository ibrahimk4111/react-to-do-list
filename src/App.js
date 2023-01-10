import React from "react";
import AddTaskBtn from "./components/addTask/AddTaskBtn";
import ToDoBody from "./components/body/ToDoBody";
import { TaskProvider } from "./components/context/UserContext";
import OverLay from "./components/OverLay/OverLay";
import PopUp from "./components/PopUp/PopUp";
// import ToDoHead from "./components/head/ToDoHead";

const App = () => {
  return (
    <TaskProvider>
      <OverLay />
      <PopUp />

      {/* <ToDoHead /> */}
      <AddTaskBtn />
      <ToDoBody />
    </TaskProvider>
  );
};

export default App;
