import React from 'react'
import Product from './Product';

const Products = () => {
    var products=[
        {title:"arquitel",description:"Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis magnam quas blanditiis! sit amet consectetur adipisicing elit. Eligendi cumque itaque doloremque, totam beatae corrupti!",live:true,case:false},
        {title:"TIR",description:"Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis magnam quas blanditiis! sit amet consectetur adipisicing elit. Eligendi cumque itaque doloremque, totam beatae corrupti!",live:true,case:false},
        {title:"YIR 2022",description:"Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis magnam quas blanditiis! sit amet consectetur adipisicing elit. Eligendi cumque itaque doloremque, totam beatae corrupti!",live:true,case:true},
        {title:"Yahoo!",description:"Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis magnam quas blanditiis! sit amet consectetur adipisicing elit. Eligendi cumque itaque doloremque, totam beatae corrupti!",live:true,case:false},
    ];
  return (
    <div className='mt-32'>
    {products.map((ele,idx)=><Product key={idx} val={ele}/>)}
    </div>
  );
}
export default Products