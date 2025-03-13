import React from 'react'
import {Route,Routes} from "react-router-dom"
import Home from '../components/Home'
import User from '../components/User'
import About from '../components/About'
import UsersDetails from '../components/UsersDetails'
import Show from '../components/Show'
import Services from '../components/Services'
import Show2 from '../components/Show2'
function Routing() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/About/:id" element={<About/>}/>

      {/* <Route path="/User" element={<User/>}/>
      <Route path="/User/:name" element={<UsersDetails/>}/> */}
      {/* i want that the user details open in same page of user*/}
      <Route path="/User" element={<User/>}>
           <Route path="/User/:name" element={<UsersDetails/>}/>
      </Route>
      <Route path='/show' element={<Show/>}></Route>
      <Route path='/services' element={<Services/>}></Route>
      <Route path='/show2' element={<Show2/>}></Route>

     </Routes>
    </>
  )
}
export default Routing