import React, {useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../utils/axios';
import { ProductContext } from '../utils/Context';
const Details = () => {
  const [product,setproduct]=useState(null)
  const[products,setproducts]= useContext(ProductContext)
  const { id } = useParams(); // Get product ID from URL
  const navigate=useNavigate()
  // const getsingleproduct=async()=>{
  //   try{
  //     const {data}=await axios.get(`/products/${id}`);
  //     // console.log(data);
  //     setproduct(data)
  //   }catch(e){
  //     console.log(e);
  //   }
  // }

  useEffect(()=>{
    //getsingleproduct();
    if(!product){
      setproduct(products.filter((p)=>p.id==id)[0]);
    }
  },[])

  const productDeleteHandler=(id)=>{
    const filterproduct=products.filter((p)=>p.id!==id);
    setproduct(filterproduct);
    localStorage.setItem("products",JSON.stringify(filterproduct))
    navigate("/")
  }

  if (!product) return <h1 className="text-center text-2xl mt-10">Product not found!</h1>;
  return (
    <div className="w-[70%] flex flex-wrap h-full justify-between m-auto p-[5%] items-center">
      {/* Product Image */}
      <img className="object-contain h-[80%] w-[40%] rounded-lg shadow-md" src={product.image} alt={product.title} />

      {/* Product Details */}
      <div className="content w-[50%]">
        <h1 className="text-4xl font-semibold text-gray-800">{product.title}</h1>
        <h3 className="text-zinc-500 my-3 text-lg capitalize">{product.category}</h3>
        <h2 className="text-red-500 text-2xl font-bold mb-3">${product.price}</h2>
        <p className="mb-[5%] text-gray-600 text-sm">{product.description}</p>

        {/* Buttons */}
        <div className="flex">
          <button onClick={() => navigate(`/edit/${product.id}`)} className="mr-5 py-2 px-5 border rounded border-blue-300 text-blue-500 hover:bg-blue-500 hover:text-white transition">Edit</button>
          <button onClick={()=>productDeleteHandler(product.id)} className="py-2 px-5 border rounded border-red-300 text-red-500 hover:bg-red-500 hover:text-white transition">Delete</button>
        </div>
      </div>
    </div>
  );
};
export default Details;