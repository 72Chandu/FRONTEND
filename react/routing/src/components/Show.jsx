//inderstanding api
import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import axios from '../utils/axios'
function Show() {
  const [prod, setProd] = useState([]);
  const getproduct = async () => {
    const api = "/users";
    try {
      const response = await axios.get(api);
      setProd(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  const addproduct = async () => {
    const api = "https://fakestoreapi.com/products";
    try {
      const response = await axios.post(api, {
        title: "New Product",
        price: 10.99,
        description: "A new product description",
        category: "electronics",
        image: "https://via.placeholder.com/150"
      });
      console.log("Product added:", response.data);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };
  console.log(prod) // when getproduct is call then show 
  return (
    <div>
      <button onClick={getproduct} className='rounded px-5 py-2 bg-red-300'>Call Product API</button>
      <br /><br />
      <button onClick={addproduct} className='rounded px-5 py-2 bg-red-300'>Add Product to API</button>
      <hr className='my-10' />
      <p>jab Call Product API pe click karege tab data show karege:</p>
      <ul>
        {prod.length > 0 ? prod.map((p)=>(<li key={p.id} className='mb-2 rounded p-5 bg-red-200'>{p.username}</li>)):<p>Loading...</p>}
      </ul>
    </div>
  );
}
export default Show;