import React from 'react'

const Footer = () => {
  return (
    <div className='w-full'>
        <div className='max-w-screen-xl mx-auto py-10 flex gap-32'>
            <div className='basic-1/2'>
            <h1 className='text-[11.5rem] font-semibold leading-none tracking-tight'>refokus.</h1>
            </div>
            <div className='basis-1/2 flex gap-4'>
            
            <div className='basis-1/3'>
                <h4 className='mb-10 text-zinc-500 capitalize'>socials</h4>
                {["instagram","twitter (x?)","LinkedIn"].map((item,idx)=><a className='block mt-3 capitalize text-zinc-600'>{item}</a>)}
            </div>
            <div className='basis-1/3'>
                <h4 className='mb-10 text-zinc-500 capitalize'>socials</h4>
                {["instagram","twitter (x?)","LinkedIn"].map((item,idx)=><a className='block mt-3 capitalize text-zinc-600'>{item}</a>)}
            </div>

            <div className='basis-1/2 flex flex-col items-center'>
            <p className='text-right'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, neque?</p>
            <img src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b9b2d3d56a1d071ef8_633c148a12c2cf0d8c755473_61957d908c68e7c692fe642e_haufe.svg" alt="" className='w-32 mt-10 filter invert brightness-0' />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer