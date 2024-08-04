import React from 'react'
import { motion } from 'framer-motion'

export const PostComponent = () => {
  return (
    <motion.article 
    initial={{ scale: 0.5 }}
    whileInView={{ scale: 1 }}
    viewport={{ once: true }}
    transition={{ type: "spring" }}
    className='cursor-pointer flex-col space-y-1 hover:scale-105 focus:border-2 focus:border-slate-400' style={{transition: '0.3s'}}
    >
        <img src="https://blog.runrun.it/wp-content/uploads/2024/02/IA-Generativa_Blog.png.webp" alt="a" className='rounded-lg object-cover' style={{
            height: '250px'
        }}/>
        <span className='text-slate-400'>04 mar 2024</span>
        <h2 className='text-lg font-bold text-slate-800'>Post Title</h2>
    </motion.article>
  )
}
