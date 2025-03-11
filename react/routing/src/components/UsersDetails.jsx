import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function UsersDetails() {
    const {name}=useParams(); //  /User/:name -> geting thisrouting name 
    const navigate= useNavigate(); // helps in navigating through button
    //console.log(name);
    const GoBackHandel=()=>{
        navigate("/user")
        // navigate(-1)//move 1 back 
    }
    return (
        <div className='w-1/2 m-auto mt-10'>
            <h1 className='text-5xl mb-2 text-red-200'>Users Details</h1>
            <h1 className='text-3xl'>{name}</h1>
            <button onClick={GoBackHandel} className='mt-5 px-3 py-2 bg-red-300 text-white'>Go back</button>
        </div>
      )
}
export default UsersDetails