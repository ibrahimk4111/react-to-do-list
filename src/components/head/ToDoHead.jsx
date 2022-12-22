import { motion } from 'framer-motion';
import React from 'react';

const ToDoHead = () => {
  return (
    <motion.div 
    className=' uppercase font-sans text-center py-3 bg-cyan-300 mb-3'
    
    animate={{
      boxShadow: "2px 2px 20px rgba(0, 0, 0, 0.2)"
    }}
    >
      
      <h1 className=' text-3xl antialiased '>T o d o L i s t</h1>
    </motion.div>
  )
}

export default ToDoHead;