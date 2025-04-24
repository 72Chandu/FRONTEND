import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { asyncgetproducts } from '../actions/ProductAction'
const Products = () => {
    const {products} = useSelector((state)=>state.ProductReducer)
    console.log(products)
    const dispatch=useDispatch()
    useEffect(()=>{
       dispatch(asyncgetproducts()) 
    },[])
  return (
    <div className='m-auto contianer p-10 mt-5 bg-red-100'>
      <h1 className='text-2xl font-bold text-red-900'>Product List</h1>
      <ol>
      {products && products.map((product,idx)=>{
        return(
          <li key={product.id}><h1>{product.title}</h1></li>
        )
      })}
      </ol>  
    </div>
  )
}

export default Products