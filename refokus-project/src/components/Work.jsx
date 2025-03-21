import React from 'react'

const Work = () => {
    var images=[
        {url:"https://images.unsplash.com/photo-1740171423940-042150f1ac53?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D",top:"50%",left:"50%", isActive:false},
        {url:"https://images.unsplash.com/photo-1616939750001-566f1e189f2c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfHFQWXNEenZKT1ljfHxlbnwwfHx8fHw%3D",top:"56%",left:"44%", isActive:false},
        {url:"https://images.unsplash.com/photo-1742036026135-4e62e2725d47?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D",top:"45%",left:"56%", isActive:false},
        {url:"https://plus.unsplash.com/premium_photo-1700401698767-d6535274146d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8eGpQUjRobGtCR0F8fGVufDB8fHx8fA%3D%3D",top:"60%",left:"53%", isActive:false},
        {url:"https://images.unsplash.com/photo-1741514230312-accd3f944fb7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8SnBnNktpZGwtSGt8fGVufDB8fHx8fA%3D%3D",top:"43%",left:"40%", isActive:false},
        {url:"https://plus.unsplash.com/premium_photo-1673618856293-87849f06ffaf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",top:"65%",left:"55%", isActive:false},
    ]
  return (
    <div className='w-full'>
        <div className='max-w-screen-xl mx-auto text-center relative'>
            <h1 className='text-[30vw] leading-none font-medium tracking-tight select-none'>Work</h1>
            <div className='absolute w-full h-full top-0'>
                {images.map((elem,idx)=>(elem.isActive && (<img className='absolute w-60 rounded-lg h-60 -translate-x-[50%] -translate-y-[50%]' src={elem.url} style={{top:elem.top,left:elem.left}}/>)))}
            </div>
        </div>
    </div>

  )
}

export default Work