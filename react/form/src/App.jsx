import { useRef, useState } from 'react'
import Cards from './components/Cards'
import Form from './components/Form'
import {useForm} from "react-hook-form"
// function App() {
//   const name=useRef(null);
//   const age=useRef(null);
//   const handelSubmit=(e)=>{
//     e.preventDefault();
//     console.log(name.current.value,age.current.value);
//   }
//   return (
//     <form action="" onSubmit={handelSubmit}>
//       <input ref={name} type="text" placeholder='name' />
//       <input ref={age} type="text" placeholder='age' />
//       <input type="submit" />
//     </form>
//   )
// }

//value change using useState at real time 

// function App() {
//   const[val,setVal]=useState({name:'',age:''}); // when you go to App section in component in inspect element then you show this empty field is filling when you write in box
//   const handelChange=(e)=>{ //jise jise tum fill karoge waise wase console me dikhega 
//     setVal({...val,[e.target.placeholder]:e.target.value});
//     console.log(e.target.value);
//   }
//   const handelSubmit=(e)=>{
//     e.preventDefault();
//     console.log(val); //at real time the value is submited
//   };
//   return (
//     <form action="" onChange={handelChange} onSubmit={handelSubmit}>
//       <input type="text" placeholder='name' />
//       <input type="text" placeholder='age' />
//       <input type="submit" />
//     </form>
//   )
// }

//Form handling React Hook
// function App() {
//   const {register,handleSubmit}=useForm();
//   console.log(register());
//   return (
//     <form action="" onSubmit={handleSubmit((data)=>console.log(data))}>
//       <input {...register('name')} type="text" placeholder='name' />
//       <input {...register('age')} type="text" placeholder='age' />
//       <input type="submit" />
//     </form>
//   )
// }

//app->cards->card->form

function App() {
  const [users,setUsers]=useState([]);
  const handelFormSubmitData=(data)=>{
    setUsers([...users,data])
  }
  const handelRemove=(id)=>{
    setUsers(()=>users.filter((item,index)=>index!=id))
  }
  return (
    <div className='w-full h-screen bg-zinc-200 flex items-center justify-center'>
      <div className='container mx-auto'>
        <Cards handelRemove={handelRemove} users={users} />
        <Form handelFormSubmitData={handelFormSubmitData}/>
      </div>
    </div>
  )
}
export default App