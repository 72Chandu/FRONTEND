import React from 'react'
import Button from './Button'

const Product = ({val,mover,count}) => {
  return (
    <div className='w-full py-20 text-white h-[23rem]'>
      <div onMouseEnter={()=>{mover(count)}} className='max-w-screen-xl mx-auto flex items-center justify-between'>
        <h1 className='text-6xl capitalize font-semibold'>{val.title}</h1>
        <div className='dets w-1/3'>
          <p className='mb-6 text-sm leading-relaxed'>{val.description}</p>
          <div className="w-fit flex items-center gap-5"> {/* Wrapper to control button size */}
            {val.live && <Button/>}
            {val.case && <Button title='Case Study'/>}
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
