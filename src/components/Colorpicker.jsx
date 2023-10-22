'use client'
import * as nearestColour from 'nearest-color';
import { useState,useEffect } from "react"
import { tailwindColours as v3_3_colours } from '../../colourSets/v3-3_colours';
import { isValidColour } from '@/lib/isValidColour';

function rgbToHex(r, g, b) {
  const red = Number(r).toString(16).padStart(2, '0');
  const green = Number(g).toString(16).padStart(2, '0');
  const blue = Number(b).toString(16).padStart(2, '0');
  return `#${red}${green}${blue}`;
}


export default function Colorpicker() {
    
    const [color,setColor]= useState('#bffedb')
    const [red,setRed]=useState(191)
    const [blue,setBlue]=useState(219)
    const [green,setGreen]=useState(254)

    const getNearestTailwindColour = nearestColour.from(v3_3_colours);
    let nearestTailwindColour = null;
    nearestTailwindColour = getNearestTailwindColour(color);
    let clrstr =`bg-${nearestTailwindColour['name']}`
    
    useEffect(()=>{
      let hex = rgbToHex(red,green,blue)
      setColor(hex)
    },[red,green,blue])
  return (
    <div className="max-w-7xl mx-auto min-h-screen">

        <div className="max-w-4xl mx-auto border border-red-600 text-blue-100 text-xl">
               <p className="text-center">Choose The Color Below</p>
               <div className="flex max-w-xl justify-around my-5 mx-auto border border-blue-600">
                 <div className=" border-r-2 pr-4 pt-5 border-white">
                  <div className="flex my-2">
                    <label htmlFor="red" className="text-red-600">RED : </label>
                    <input className="bg-gray-600 rounded-md text-red-600 px-4 w-20 mx-9" type="text" id="red" value={red} onChange={(e)=>setRed(e.target.value)} />
                  </div>
                  <div className="flex my-2">
                    <label htmlFor="green" className="text-green-600">GREEN : </label>
                    <input className="bg-gray-600 rounded-md text-green-600 px-4 w-20 mx-2" type="text" id="green" value={green} onChange={(e)=>setGreen(e.target.value)} />
                  </div>
                  <div className="flex my-2">
                    <label htmlFor="blue" className="text-blue-600">BLUE : </label>
                    <input className="bg-gray-600 rounded-md text-blue-600 px-4 w-20 mx-6" type="text" id="blue" value={blue} onChange={(e)=>setBlue(e.target.value)} />
                  </div>
                 </div>
                 <div className="flex flex-col items-center justify-center">
                  <span>Color :</span>
                  {/* <div className={`w-24 h-24 rounded-lg bg-${nearestTailwindColour['name']}`}></div> */}
                  
                  <div style={{backgroundColor:`${nearestTailwindColour['value']}`}} className={`w-24 h-24 rounded-lg`}></div>
                      
                 </div>
               </div>

               <p className="text-center">Tailwind color : {nearestTailwindColour.name}</p>
               <p className="text-center">Color in HEX : {color}</p>
        </div>
        
    </div>
  )
}
