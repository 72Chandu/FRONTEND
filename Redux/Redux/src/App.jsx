import React from "react";
import {useDispatch, useSelector} from 'react-redux'
import { decrement, increment, incrementAsync, incrementByAmount } from "./Reducers/ContainerSlice";
const App=()=>{
  // we can not call action directly we should dispatch it 
  const dispatch=useDispatch();
  
  //useSelector is used to read the data global state(Store.jsx)
  
  // const d=useSelector((state)=>state)
  // console.log(d) //{ counter:{value:0}}

  // const d1=useSelector((state)=>state.counter)
  // console.log(d1) //{value:0}

  const {value}=useSelector((state)=>state.counter)
  console.log(value) //{value:0}

  return (
    <div className="m-auto container p-10 mt-5 bg-red-100">
      <h1 className="mx-5 text-center text-3xl font-bold text-red-900">counter:{value}</h1>
      <div className="text-center">
        <button onClick={()=>dispatch(increment())} className="text-red-900 border-2 rounded bg-transparent px-5 py-2">Increment</button>
        <button onClick={()=>dispatch(decrement())} className="mx-5 text-red-900 border-2 rounded bg-transparent px-5 py-2">Decrement</button>
        <button onClick={()=>dispatch(incrementByAmount(5))} className="text-red-900 border-2 rounded bg-transparent px-5 py-2">Increment By 5</button>
        <button onClick={()=>dispatch(incrementAsync(5))} className="text-red-900 border-2 rounded bg-transparent px-5 py-2">incrementAsync By 5</button>
      </div>
    </div>
  )
} 
export default App;