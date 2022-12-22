import React from 'react';
import AddTaskBtn from './components/addTask/AddTaskBtn';
import ToDoBody from './components/body/ToDoBody';
import { TaskProvider } from './components/context/UserContext';
import ToDoHead from './components/head/ToDoHead';

const App = () => {
  return (
    <TaskProvider>
      <ToDoHead />
      <AddTaskBtn />
      <ToDoBody />
    </TaskProvider>
  )
}

export default App;