import { motion } from 'framer-motion';
import React, { useContext } from 'react';
import UserContext from '../../context/UserContext';

const Task = ({ task }) => {
  const {deleteTask, setId, doneTask} = useContext(UserContext)

  return (
    <>
      <motion.div 
      className='border-2 p-3 my-3 rounded-md'
      
      initial={{ x: '-50%', margin: 0 }}
      animate={{x: 0, marginTop: 10, boxShadow: "2px 2px 20px rgba(0, 0, 0, 0.2)"}}
      transition={{
        type: "spring"
      }}
      >
      <div className=' flex justify-end '>
        {/* Delete Red Button */}
          <motion.button
            className=' border-2 w-14 h-7 rounded-full bg-red-500 text-white text-sm'
            whileTap={{ scale: 2 }}
            onClick={()=>deleteTask(task.id)}
          >Delete</motion.button>
          
        {/* Edit Gray Button */}
          <motion.button
            className='border-2 w-14 h-7 rounded-full bg-gray-500 mx-2 text-white text-sm'
            whileTap={{ scale: 2 }}
            onClick={()=>setId(task.id)}
          >Edit</motion.button>

        {/* Done Green Button*/}
          <motion.button
            className='border-2 w-14 h-7 rounded-full bg-green-500 text-white text-sm'
            whileTap={{ scale: 2 }}
            onClick={()=>doneTask(task.id)}
          >Done</motion.button>
        </div>
        
        <p>
          {task.id}
        </p>
        <p>
          {task.taskValue}
        </p>
        <p>
          {task.date}
        </p>
        
      </motion.div>
    </>
  )
}

export default Task;

// <motion.div
//       className='border-2 p-3 rounded-md'
//         initial={{ x: '-50%', margin: 10 }}
//         animate={{ x: 0, marginTop: 50 }}
//         // exit={{
//         //   x: '-100%',
//         //   height: 0,
//         //   marginTop: 0,
//         //   padding: 0,
//         //   opacity: 0,
//         //   width: 0,
//         //   transition: {
//         //     duration: 0.3,
//         //   },
//         // }}  
//         transition={{
//           type: 'spring',
//           stiffness: 80,
//           damping: 10,
//         }}>
        
//         <div className=' flex justify-end '>
//           <motion.button
//           className=' border-2 w-4 h-4 rounded-full bg-red-500 '
//             whileTap={{ scale: 2 }}
//           ></motion.button>
//           <motion.button
//           className='border-2 w-4 h-4 rounded-full bg-gray-400 mx-2'
//             whileTap={{ scale: 2 }}
//           ></motion.button>
//           <motion.button
//           className='border-2 w-4 h-4 rounded-full bg-green-400'
//             whileTap={{ scale: 2 }}
//           ></motion.button>
//         </div>
//         <p className='w-2'>
//           fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
//         </p>
//       </motion.div>