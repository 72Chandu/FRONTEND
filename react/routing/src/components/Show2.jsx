//inderstanding api
import React, { useEffect, useState } from 'react';
// import axios from 'axios'; // axios ko direct hum call nahi karege ku ki seprate object create hota hai 
import axios from '../utils/axios' //jitna component me axios ka use j=karna hai to hum direct import na kar ke hum seprate file se lenge 
function Show2() {
  const [prod, setProd] = useState([]);
  const getproduct = async () => {
    const api = "/products";
    try {
      const response = await axios.get(api);
      setProd(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  useEffect(()=>{
    getproduct(); //when this call automatically the data get save in prod and it will show
  })
  return (
    <div>
      <hr className='my-10' />
      <p>bina button click kye data show ho raha hai:</p>
      <ul>
        {prod.length > 0 ? prod.map((p)=>(<li key={p.id} className='mb-2 rounded p-5 bg-red-200'>{p.title}</li>)):<p>Loading...</p>}
      </ul>
    </div>
  );
}
export default Show2;