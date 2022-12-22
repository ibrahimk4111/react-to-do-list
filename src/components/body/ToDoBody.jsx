import React, { useContext } from 'react';
import UserContext from '../context/UserContext';
import Task from './task/Task';

const ToDoBody = () => {
const {tasks} = useContext(UserContext)

  return (
    <div className='flex justify-center items-center mt-2'>
        <div className='w-1/2'>
        {
          tasks.map(task => {
            return <Task key={task.id} task={task}/>
          })
        }
        </div>
    </div>
  )
}

export default ToDoBody