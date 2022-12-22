import { motion } from 'framer-motion';
import React, { useContext, useRef } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import userContext from '../../context/UserContext';

const TaskModal = () => {
    //distructing funtion from context api
    const { addTasks } = useContext(userContext)

    //useRef to collect reference value
    const taskRef = useRef()
    const completionRef = useRef()

    //On Submit of form

    const submitTask = (e) => {
        e.preventDefault();
        const taskValue = taskRef.current.value;
        const completeValue = completionRef.current.value;
        const date = new Date().toLocaleDateString()

        taskValue.trim() !== "" ?
            addTasks(taskValue, completeValue, date)
            : toast.error("Write Something")


        taskRef.current.value = ""
    }

    return (
        <>
            <ToastContainer />
            {/* The button to open modal */}
            <motion.button whileHover={{ scale: 0.9 }}>
                <label
                    htmlFor="my-modal"
                    className='px-3 py-1.5 rounded-full bg-cyan-300 hover:bg-cyan-600 cursor-pointer hover:text-white'
                >
                    Add Task
                </label>
            </motion.button>
            <form>
                {/* Put this part before </body> tag */}
                < input type="checkbox" id="my-modal" className="modal-toggle" />

                <div className="modal">
                    <div className="modal-box">
                        <div>
                            <input ref={taskRef} type="text" placeholder="Write Here" className="input font-extralight input-bordered w-full max-w-xs" />

                            <select
                                ref={completionRef}
                                className='input input-bordered w-full max-w-xs my-3'
                            >
                                <option value="Completed" >Completed</option>
                                <option value="Uncomplete" >Uncomplete</option>
                            </select>
                        </div>

                        {/* submittion section */}
                        <div className="modal-action">
                            <motion.button whileHover={{ scale: 0.9 }} type="button" onClick={submitTask}>
                                <label htmlFor="my-modal" className="px-4 py-2 rounded-full cursor-pointer bg-cyan-300 hover:bg-cyan-900 hover:text-white">Add</label>
                            </motion.button>

                            <label htmlFor="my-modal" className="px-4 py-2 rounded-full cursor-pointer bg-cyan-300 hover:bg-cyan-900 hover:text-white">Cancel</label>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default TaskModal;