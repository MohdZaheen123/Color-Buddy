"use client"

import {motion,AnimatePresence} from 'framer-motion'

export default function Hero() {
  return (
    <AnimatePresence>
    <motion.div
    className='min-h-screen max-w-7xl mx-auto'>
        
         <motion.h1
           animate={{opacity:1,y:0}} 
           initial={{opacity:0,y:5}}
         className="text-center mt-20 animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black">Listen Up  Developers And</motion.h1>
         <motion.h1
         animate={{opacity:1,y:0}} 
         initial={{opacity:0,y:5}}
         transition={{delay:0.2}}
         className="text-center animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black">Designers!!</motion.h1>
         <motion.div
         animate={{opacity:1,y:0}} 
         initial={{opacity:0,y:5}}
         transition={{delay:0.4}}
         >

         
         <p className='text-white text-center mt-10'>Ever been frustrated in working with colors in our most interesting framework tailwind css. or had problems in chainging <span  className='text-red-600'>R</span><span className='text-green-600'>G</span><span className='text-blue-600'>B</span> colors to Hex</p>
         <p className='text-white text-center'>ColorBuddy is one stop solution for converting Hex colors to tailwind colors and also converting <span  className='text-red-600'>R</span><span className='text-green-600'>G</span><span className='text-blue-600'>B</span> to Hex</p>
         </motion.div>
         <motion.img
         animate={{opacity:1}} 
         initial={{opacity:0}}
        transition={{delay:0.5}}
         className='mx-auto my-20 opacity-70' src="/hero.jpg" height={10} alt="hero image" />
         </motion.div>


    </AnimatePresence> 
  )
}
