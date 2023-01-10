import { createContext, useEffect, useState } from "react";
import { v4 as uuid6 } from "uuid";

const UserContext = createContext();

export const TaskProvider = ({ children }) => {
  //taking tasks from local storage to supply other components
  const [tasks, setTasks] = useState(
    !localStorage.getItem("tasks")
      ? localStorage.setItem("tasks", JSON.stringify([]))
      : []
  );

  const [modalDirection, setModalDirection] = useState({ text: "" });
  const addTasks = (taskValue, date) => {
    const oldTask = JSON.parse(localStorage.getItem("tasks"));
    const newTask = {
      id: uuid6(),
      taskValue,
      isDone: false,
      date,
    };

    localStorage.setItem("tasks", JSON.stringify([newTask, ...oldTask]));
    setTasks([newTask, ...tasks]);
  };

  const popupHandle = () => {
    setPopUp({ in: !PopUp.in });
    setModalDirection({ text: "Add" });
  };

  //getting value after reloading website
  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem("tasks")));
  }, []);

  //delete Task
  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  //Edit Task
  const [oldTaskValue, setOldTaskValue] = useState({ taskValue: "" });
  const [PopUp, setPopUp] = useState({ in: false, item: null });

  const setId = (id) => {
    const newTask = [...tasks];
    const index = newTask.findIndex((task) => task.id === id);
    setPopUp({ in: !PopUp.in, item: newTask[index] });
    setModalDirection({ text: "Edit" });
    setOldTaskValue({ taskValue: newTask[index].taskValue });
  };

  const editTask = (taskValue) => {
    const newTask = [...tasks];
    const index = newTask.findIndex((task) => task.id === PopUp.item.id);
    newTask[index].taskValue = taskValue;

    setTasks(newTask);

    localStorage.setItem("tasks", JSON.stringify(newTask));
  };

  // Done Task
  const doneTask = (id) => {
    const newTask = [...tasks];
    const index = newTask.findIndex((task) => task.id === id);
    newTask[index].isDone = !newTask[index].isDone;
    setTasks(newTask);

    localStorage.setItem("tasks", JSON.stringify(newTask));
  };

  //dropDown
  const [dropDownValue, setDropDownValue] = useState("all");
  const dropDown = (e) => {
    setDropDownValue(e.target.value);
  };

  return (
    <UserContext.Provider
      value={{
        tasks,
        addTasks,
        modalDirection,
        popupHandle,
        deleteTask,
        PopUp,
        setPopUp,
        oldTaskValue,
        editTask,
        setId,
        doneTask,
        dropDownValue,
        dropDown,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
