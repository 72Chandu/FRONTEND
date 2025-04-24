import React  from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { userdelete } from '../reducers/UserReducer';
const Users = () => {
  const {users}=useSelector((state)=>state.UserReducer);
  // console.log(users)
  const dispatch=useDispatch()
  const DeleteHandler=(idx)=>{ // we can not directly delete the data we have to use action to manupulate the data 
    console.log(idx);
    dispatch(userdelete(idx))   //to call the action we use dispatch
  }
  return (
    <div className='m-auto contianer p-10 mt-5 bg-red-100'>
      <h1 className='text-2xl font-bold text-red-900'>User List</h1>
      <ol>
      {users.map((user,idx)=>{
        return(
          <li key={user.id}><h1>{user.name} <span onClick={()=>DeleteHandler(idx)} className='text-red-500 font-black cursor-pointer'>X</span></h1></li>
        )
      })}
      </ol>  
    </div>
  )
}

export default Users