import React, { useContext } from 'react'
import { UserContext } from '../context/Context'
import {Link} from "react-router-dom"
function Home() {
  const {users,setusers}=useContext(UserContext) // acessing data from Context
  // console.log(users);
  
  return (
    <div className='w-1/2 m-auto mt-10'>
        <h1 className='text-5xl mb-2 text-red-200'>Home</h1>
        <p className='mb-2 text-zinc-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos nemo laboriosam debitis, totam neque reprehenderit minima ipsam aut incidunt, quo explicabo asperiores quisquam, dolorem tenetur officia quae? Doloremque, eum esse?</p>
        <button className='p-3 bg-zinc-300 text-white'>Explore More</button>
        
        <hr/>
        
        <h1>acessing data from Context API</h1>
        <h2 className='text-3xl'>User List</h2>
        <div className='mt-10 flex flex-col'>
          {users.map((u)=>(
            <Link key={u.id} to={`/About/${u.id}`} className="bg-red-100 p-3 mb-3">{u.username}</Link>
          ))}
        </div>
    </div>
  )
}
export default Home