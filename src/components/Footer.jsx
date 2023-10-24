"use client"

import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"

  import Link from "next/link"
  import {motion,AnimatePresence} from 'framer-motion'
export default function Footer() {
  return (
    <div className='min-h-[20rem] max-w-5xl mx-auto flex flex-col justify-around'>

    <div className="text-white">
      <p className="text-white text-center text-2xl underline py-2 underline-offset-2">Socials</p>
      <motion.div
      initial={{opacity:0,y:-100}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:0.3,delay:0.2}}
      className="flex justify-center">
        <Link href='https://github.com/MohdZaheen123' target="_blank" className="flex items-center m-1"><img src="/github.png" className="h-7 mx-1" alt="" /> Github</Link>
        <Link href='https://www.linkedin.com/in/mohamed-zaheen-a9a169256/' target="_blank" className="flex items-center m-1"><img src="/linkedin.png" className="h-7 mx-1" alt="" />LinkedIn</Link>
        <Link href='https://twitter.com/TheMatrixT8888' target="_blank" className="flex items-center m-1"><img src="/twitter.png" className="h-7 mx-1" alt="" />Twitter</Link>
        </motion.div>
       
       <motion.div
       initial={{opacity:0,y:-100}}
       whileInView={{opacity:1,y:0}}
       transition={{duration:0.5,delay:0.2}}
       >
        <p className="text-center pt-4">Feel free to contact me and give your valuable suggestions. Stay tuned</p>
        <p className="text-center">for more color things</p>
        </motion.div>
    </div>

        <p className='text-blue-100 text-center'>Made with ❤️ by &nbsp; 
         <HoverCard>
  <HoverCardTrigger><span className="underline">Zaheen</span></HoverCardTrigger>
  <HoverCardContent>
    <span className="text-sm">This Next.js website is – created and maintained by zaheen.</span>
    
    <br />
    <span className="text-sm">follow me on - <Link href='https://github.com/MohdZaheen123' className="text-blue-600" target="_blank">GitHub</Link> </span>
    
  </HoverCardContent>
</HoverCard>
</p>
    </div>
  )
}
