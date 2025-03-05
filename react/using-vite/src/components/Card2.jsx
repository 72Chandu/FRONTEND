import React, { useState } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
function Card2() {
  const [val,setVal]=useState(false);
  return (
    <div className='w-full h-screen bg-zinc-300 flex justify-center items-center'>
        <div className='relative w-60 h-32 bg-zinc-500 rounded-md flex overflow-hidden'>
            <img className={`shrink-0 transition-transform duration-700 ease-in-out w-full h-full object-cover ${val===false ? "-translate-x-[0%]":"-translate-x-[100%]"}`} src='https://images.unsplash.com/photo-1618172449354-6263f0a731d1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHw1SEpkLWFiVE5Mb3x8ZW58MHx8fHx8'></img>
            <img className={`shrink-0 transition-transform duration-700 ease-in-out w-full h-full object-cover ${val===false ? "-translate-x-[0%]":"-translate-x-[100%]"}`} src='https://plus.unsplash.com/premium_photo-1713399247260-3b9c33e244ec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3xEby1oZjRFdjQ0TXx8ZW58MHx8fHx8'></img>
            <span onClick={()=>setVal(()=>!val)} className='w-8 h-8 absolute flex items-center justify-center rounded-full bg-[#dadada8b] bottom-[0%] left-1/2 -translate-x-[50%] -translate-y-[50%]'><FaArrowRightLong size={".7em"}/></span>
        </div>
    </div>
  )
}
export default Card2