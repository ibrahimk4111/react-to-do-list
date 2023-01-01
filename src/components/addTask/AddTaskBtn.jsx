
import { motion } from "framer-motion";
import React, { useContext } from "react";
import UserContext from "../context/UserContext";
// import ToDoModal from './TaskModal';

const AddTaskBtn = () => {
    const {popupHandle} = useContext(UserContext);

  return (
    <div className="flex justify-center items-center">
      <motion.div
        className="text-center flex  justify-between p-5 border-2 w-1/2 rounded-md"
        animate={{
          boxShadow: "2px 2px 20px rgba(0, 0, 0, 0.2)",
        }}
      >
        <button className="px-3 py-1.5 rounded-full bg-cyan-300 hover:bg-cyan-600 cursor-pointer hover:text-white"
        onClick={popupHandle}
        >
          Add Task
        </button>
        <select className="p-1 rounded bg-cyan-300">
          <option value={true} selected>All</option>
          <option value={true}>Completed</option>
          <option value={false}>Uncompleted</option>
        </select>
      </motion.div>
    </div>
  );
};

export default AddTaskBtn;
