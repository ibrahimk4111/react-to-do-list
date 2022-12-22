import { v4 as uuid6 } from 'uuid';
import { createContext, useEffect, useState } from "react";

const UserContext = createContext();

export const TaskProvider = ({ children }) => {
    //taking tasks from local storage to supply other components
    const [tasks, setTasks] = useState(
        !localStorage.getItem("tasks")
            ? localStorage.setItem("tasks", JSON.stringify([]))
            : []
    );

    const addTasks = (taskValue, completeValue, date) => {
        const oldTask = JSON.parse(localStorage.getItem("tasks"));

        const newTask = {
            id: uuid6(),
            taskValue,
            completeValue,
            date
        };

        localStorage.setItem("tasks", JSON.stringify([newTask, ...oldTask]));
        setTasks([newTask, ...tasks]);
    };

    //getting value after reloading website
    useEffect(() => {
        setTasks(JSON.parse(localStorage.getItem("tasks")))
    }, [])

    //delete Task
    const deleteTask = (id) => {
        const newTasks = tasks.filter((task)=> task.id !== id)
        setTasks(newTasks)
        localStorage.setItem("tasks", JSON.stringify(newTasks))
    };
  
    //Edit Task
    const editTask = (id) => {
        console.log(id)
    };

    // Done Task
    const doneTask = (id) => {
        console.log(id)
    };
    return (
        <UserContext.Provider
            value={{
                tasks,
                addTasks,
                deleteTask,
                editTask,
                doneTask
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;