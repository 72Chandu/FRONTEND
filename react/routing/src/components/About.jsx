import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/Context'
import {useNavigate, useParams} from "react-router-dom"

function About() {
  const {users}=useContext(UserContext);
  const {id}=useParams();
  // console.log(users[id]);
  const navigate=useNavigate();
  return (
    <div className='w-1/2 m-auto mt-10'>
        <h1 className='text-5xl mb-2 text-red-200'>About</h1>
         {/* Show user details only if the id exists in the URL */}
      {id && users[id] ? (
        <>
          <h2>id: {users[id].id}</h2>
          <h2>username: {users[id].username}</h2>
          <h2>city: {users[id].city}</h2>
        </>
      ) : (<p className='text-gray-500'>No user selected.</p>)
      }
        <p className='mb-2 text-zinc-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos nemo laboriosam debitis, totam neque reprehenderit minima ipsam aut incidunt, quo explicabo asperiores quisquam, dolorem tenetur officia quae? Doloremque, eum esse?</p>
        <button onClick={()=>navigate(-1)} className='p-3 bg-zinc-300 text-white'>Go Back</button>
    </div>
  )
}
export default About