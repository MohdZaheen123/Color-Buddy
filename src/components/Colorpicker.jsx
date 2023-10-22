'use client'

import { useState } from "react"



export default function Colorpicker() {

    const [color,setColor]=useState('#ff0000')
  return (
    <div className="max-w-7xl mx-auto min-h-screen">
        
        <div className="max-w-4xl mx-auto border border-red-600 text-blue-500 text-xl font-semibold">
               <p className="text-center">Choose The Color Below</p>
               <div></div>
        </div>
        
    </div>
  )
}
