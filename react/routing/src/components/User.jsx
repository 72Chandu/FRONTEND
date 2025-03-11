import React from 'react'
import {Link,Outlet} from "react-router-dom"
function User() {
  return (
    <div className='w-1/2 m-auto mt-10'>
        <h1 className='text-5xl mb-2 text-red-200'>User</h1>
        <div className='flex w-1/2 flex-col mt-5'>
          <Link className="p-3 bg-red-200 text-2xl mb-3 hover:bg-red-300" to="/user/jhon">Jhon</Link>
          <Link className="p-3 bg-red-200 text-2xl mb-3 hover:bg-red-300" to="/user/Ayush">Ayush</Link>
          <Link className="p-3 bg-red-200 text-2xl mb-3 hover:bg-red-300" to="/user/Abhhinav">Abhhinav</Link>
        </div>
        <hr />
      {/* showing usedetails */}
      <Outlet/>

    </div>
  )
}
export default User