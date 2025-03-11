import React from 'react'
import {NavLink} from "react-router-dom"
function Nav() {
  const changeNavColor=(e)=>{
     //console.log(e); //e idicate which link is active or not
     return {
      color:e.isActive? "red":"",
      fontWeight:e.isActive ?"bold":""
    }
  }
  const changeNavColorM2=(e)=>{
    return [
      e.isActive ? "text-blue-500":"",
      e.isActive ? "font-bold":"",
    ].join(" ");
  }
  return (
    <>
      <nav className='mt-10 flex justify-center gap-10'>
      {/* when we use a tag for link it will refresh the page each time to avoid it we use NavLink */}
      <NavLink style={changeNavColor} to="/">Home</NavLink> 
      {/* when you click on User it starting finding '/User' and get in Routing.jsx file and than render to that particular page which it indicate */}
      <NavLink className={changeNavColorM2} to="/User">User</NavLink> 
      <NavLink style={changeNavColor} to="/About">About</NavLink> 
     </nav>
    </>
  )
}
export default Nav