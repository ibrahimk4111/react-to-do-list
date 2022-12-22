import React from 'react';
import ToDoModal from './taskModal/TaskModal';
import { motion } from 'framer-motion';

const AddTaskBtn = () => {
    return (
        <div className='flex justify-center items-center'>
            <motion.div 
            className='text-center flex  justify-between p-5 border-2 w-1/2 rounded-md'
            animate={{
                boxShadow: "2px 2px 20px rgba(0, 0, 0, 0.2)"
            }}
            >
                <button>
                    <ToDoModal />
                </button>

                <select className='p-1 rounded bg-cyan-300'>
                    <option value="All">All</option>
                    <option value="Completed">Completed</option>
                    <option value="Uncomplete">Uncompleted</option>
                </select>
            </motion.div>
        </div>
    )
}

export default AddTaskBtn;