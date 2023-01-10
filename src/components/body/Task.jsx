import {MdDone} from "react-icons/md"
import {FaEdit} from "react-icons/fa"
import {RiDeleteBin6Line} from "react-icons/ri"
import {motion} from "framer-motion"
import UserContext from "../context/UserContext";
import React, { useContext } from "react";

const Task = ({ task }) => {
  const { deleteTask, setId, doneTask, dropDownValue } =
    useContext(UserContext);

  return (
    <>
      {dropDownValue === "all"
        ? (<motion.div
      className= {task.isDone ? 'border-2 p-3 my-3 rounded-md border-green-500' : 'border-2 p-3 my-3 rounded-md border-red-500' }
      initial={{ x: '-50%', margin: 0 }}
      animate={{x: 0, marginTop: 10, boxShadow: "2px 2px 20px rgba(0, 0, 0, 0.2)"}}
      transition={{
        type: "spring"
      }}
      >
      <div className=' flex justify-end'>
{
  /* Delete Red Button */
}
<motion.button
className='p-1 border-2 rounded-md hover:bg-slate-300'
  whileTap={{ scale: 2 }}
  onClick={()=>deleteTask(task.id)}
><RiDeleteBin6Line /></motion.button>

{
  /* Edit Gray Button */
}
<motion.button
className='p-1 border-2 rounded-md hover:bg-slate-300 mx-2'
  whileTap={{ scale: 2 }}
  onClick={()=>setId(task.id)}
><FaEdit /></motion.button>

{
  /* Done Green Button*/
}
<motion.button
    className={task.isDone? 'p-1 border-2 rounded-md hover:bg-slate-300 bg-green-400' : 'p-1 border-2 rounded-md hover:bg-slate-300'}
    whileTap={{ scale: 2 }}
    onClick={()=>doneTask(task.id)}
  ><MdDone /></motion.button>
</div>

<p >
  {task.taskValue}
</p>
<p className=' text-end text-xs '>
  Last date: {task.date}
</p>
</motion.div>)
        : dropDownValue === "done"
        ? (task.isDone && <motion.div
          className= {task.isDone ? 'border-2 p-3 my-3 rounded-md border-green-500' : 'border-2 p-3 my-3 rounded-md border-red-500' }
          initial={{ x: '-50%', margin: 0 }}
          animate={{x: 0, marginTop: 10, boxShadow: "2px 2px 20px rgba(0, 0, 0, 0.2)"}}
          transition={{
            type: "spring"
          }}
          >
          <div className=' flex justify-end'>
    {
      /* Delete Red Button */
    }
    <motion.button
    className='p-1 border-2 rounded-md hover:bg-slate-300'
      whileTap={{ scale: 2 }}
      onClick={()=>deleteTask(task.id)}
    ><RiDeleteBin6Line /></motion.button>
    
    {
      /* Edit Gray Button */
    }
    <motion.button
    className='p-1 border-2 rounded-md hover:bg-slate-300 mx-2'
      whileTap={{ scale: 2 }}
      onClick={()=>setId(task.id)}
    ><FaEdit /></motion.button>
    
    {
      /* Done Green Button*/
    }
    <motion.button
        className={task.isDone? 'p-1 border-2 rounded-md hover:bg-slate-300 bg-green-400' : 'p-1 border-2 rounded-md hover:bg-slate-300'}
        whileTap={{ scale: 2 }}
        onClick={()=>doneTask(task.id)}
      ><MdDone /></motion.button>
    </div>
    
    <p >
      {task.taskValue}
    </p>
    <p className=' text-end text-xs '>
      Last date: {task.date}
    </p>
    </motion.div>)
        : (task.isDone === false && <motion.div
          className= {task.isDone ? 'border-2 p-3 my-3 rounded-md border-green-500' : 'border-2 p-3 my-3 rounded-md border-red-500' }
          initial={{ x: '-50%', margin: 0 }}
          animate={{x: 0, marginTop: 10, boxShadow: "2px 2px 20px rgba(0, 0, 0, 0.2)"}}
          transition={{
            type: "spring"
          }}
          >
          <div className=' flex justify-end'>
    {
      /* Delete Red Button */
    }
    <motion.button
    className='p-1 border-2 rounded-md hover:bg-slate-300'
      whileTap={{ scale: 2 }}
      onClick={()=>deleteTask(task.id)}
    ><RiDeleteBin6Line /></motion.button>
    
    {
      /* Edit Gray Button */
    }
    <motion.button
    className='p-1 border-2 rounded-md hover:bg-slate-300 mx-2'
      whileTap={{ scale: 2 }}
      onClick={()=>setId(task.id)}
    ><FaEdit /></motion.button>
    
    {
      /* Done Green Button*/
    }
    <motion.button
        className={task.isDone? 'p-1 border-2 rounded-md hover:bg-slate-300 bg-green-400' : 'p-1 border-2 rounded-md hover:bg-slate-300'}
        whileTap={{ scale: 2 }}
        onClick={()=>doneTask(task.id)}
      ><MdDone /></motion.button>
    </div>
    
    <p >
      {task.taskValue}
    </p>
    <p className=' text-end text-xs '>
      Last date: {task.date}
    </p>
    </motion.div>)}
    </>
  );
};

export default Task;

