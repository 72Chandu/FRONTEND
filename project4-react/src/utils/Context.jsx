import React, { createContext, useEffect, useState } from 'react'
export const ProductContext =createContext();
import axios from './axios'
const Context = (props) => {
    const [products,setproducts]=useState(JSON.parse(localStorage.getItem("products")) || []); // the data is come from local storage . the data is save in local storage
    // const getproducts=async()=>{
    //     try{
    //         const {data}=await axios("/products");
    //         //console.log(data);
    //         setproducts(data)
    //     }catch(e){
    //         console.log(e);
    //     }
    // }
    // //console.log(products)
    // useEffect(()=>{
    //     getproducts();
    // },[])
    return (<ProductContext.Provider value={[products,setproducts]}>{props.children}</ProductContext.Provider>)
}
export default Context