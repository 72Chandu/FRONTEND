import React, { useContext, useState } from 'react'
import { ProductContext } from '../utils/Context'
import {nanoid} from 'nanoid'
import { useNavigate } from 'react-router-dom'
const Create = () => {
  const navigate=useNavigate()
  const[products,setproducts]= useContext(ProductContext)
  const [title, settitle] = useState("")
  const [image, setimage] = useState("")
  const [category, setcategory] = useState("")
  const [price, setprice] = useState("")
  const [description, setdescription] = useState("")
  const Addproducthandeler=(e)=>{
    e.preventDefault()
    if(title.trim().length<5 || price.trim().length<1 || image.trim().length<5 || category.trim().length<5 || description.trim().length<5){
      alert("Each and every input must have at least 5 letter")
      return;
    }
    const product={id:nanoid() ,title,image,category,price,description}
    // console.log(product)
    setproducts([...products, product]); 

    // Save the UPDATED array to localStorage
    localStorage.setItem("products", JSON.stringify([...products, product]));
    navigate("/")
  }
  return (
    <form onSubmit={Addproducthandeler} className='flex flex-col items-center p-[5%] w-screen h-screen'>
      <h1 className='mb-5 w-1/2 text-3xl'>Add New Product</h1>
      <input type="url" placeholder='image link' className='text-2xl bg-zinc-100 rounded p-3 w-1/2 mb-3' onChange={(e) => setimage(e.target.value)} value={image} />
      <input type="text" placeholder='title' className='text-2xl bg-zinc-100 rounded p-3 w-1/2 mb-3' onChange={(e) => settitle(e.target.value)} value={title} />
      <div className='w-1/2 flex justify-between'>
        <input type="number" placeholder='price' className='text-1xl bg-zinc-100 rounded p-3 w-[48%] mb-3' onChange={(e) => setprice(e.target.value)} value={price} />
        <input type="text" placeholder='category' className='text-1xl bg-zinc-100 rounded p-3 w-[48%] mb-3' onChange={(e) => setcategory(e.target.value)} value={category} />
      </div>
      <textarea name="" rows="10" placeholder='Enter Product description... ' className='text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3' onChange={(e) => setdescription(e.target.value)} value={description}></textarea>
      <div className='w-1/2'>
      <button className=' py-2 px-5 border rounded border-blue-200 text-blue-300'>Add New Product</button>
      </div>
    </form>
  )
}
export default Create