import React, { useState } from 'react'
import Product from './Product';
import {motion} from "framer-motion"
const Products = () => {
  var products = [
    { title: "arquitel", description: "Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis magnam quas blanditiis! sit amet consectetur adipisicing elit. Eligendi cumque itaque doloremque, totam beatae corrupti!", live: true, case: false },
    { title: "TIR", description: "Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis magnam quas blanditiis! sit amet consectetur adipisicing elit. Eligendi cumque itaque doloremque, totam beatae corrupti!", live: true, case: false },
    { title: "YIR 2022", description: "Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis magnam quas blanditiis! sit amet consectetur adipisicing elit. Eligendi cumque itaque doloremque, totam beatae corrupti!", live: true, case: true },
    { title: "Yahoo!", description: "Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis magnam quas blanditiis! sit amet consectetur adipisicing elit. Eligendi cumque itaque doloremque, totam beatae corrupti!", live: true, case: false },
  ];
  const [pos,setPos]=useState(0)
  const mover =(val)=>{
    setPos(val*23)
  }
  return (
    <div className='mt-32 relative'>
      {products.map((ele, idx) => <Product key={idx} val={ele} mover={mover} count={idx} />)}
      <div className='top-0 absolute w-full h-full pointer-events-none'>
        <motion.div initial={{y:pos,x:"-50%"}} animate={{y:pos+`rem`}} transition={{ease:[0.76,0,0.24,1],duration:.6}} className='window absolute w-[32rem] h-[23rem] bg-white left-[44%] overflow-hidden'>
          <motion.div transition={{ease:[0.76,0,0.24,1],duration:.5}} animate={{y:-pos+`rem`}} className='w-full h-full bg-sky-100'></motion.div>
          <motion.div transition={{ease:[0.76,0,0.24,1],duration:.5}} animate={{y:-pos+`rem`}} className='w-full h-full bg-sky-200'></motion.div>
          <motion.div transition={{ease:[0.76,0,0.24,1],duration:.5}} animate={{y:-pos+`rem`}} className='w-full h-full bg-sky-300'></motion.div>
          <motion.div transition={{ease:[0.76,0,0.24,1],duration:.5}} animate={{y:-pos+`rem`}} className='w-full h-full bg-sky-400'></motion.div>
        </motion.div>
      </div>
    </div>
  );
}
export default Products