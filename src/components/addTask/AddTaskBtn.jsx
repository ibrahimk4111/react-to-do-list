import { motion } from "framer-motion";
import React, { useContext } from "react";
import UserContext from "../context/UserContext";
// import ToDoModal from './TaskModal';

const AddTaskBtn = () => {
  const { popupHandle, dropDown } = useContext(UserContext);

  return (
    <motion.div
      className="flex justify-between items-center p-5 rounded-md border-gray-800"
      animate={{
        boxShadow: "2px 2px 20px rgba(0, 0, 0, 0.2)",
      }}
    >
      <div>
        <button
          className="rounded-full p-1 px-2 bg-cyan-300 hover:bg-cyan-600 cursor-pointer hover:text-white"
          onClick={popupHandle}
        >
          Add
        </button>
      </div>
      <div>
        <h1 className=" text-xl "> T O D O S</h1>
      </div>
      <div>
        <select
          className="border-2 p-1 rounded-full bg-cyan-100"
          onClick={dropDown}
        >
          <option value="all">All</option>
          <option value="done">Completed</option>
          <option value="undone">Uncompleted</option>
        </select>
      </div>
    </motion.div>
  );
};

export default AddTaskBtn;
