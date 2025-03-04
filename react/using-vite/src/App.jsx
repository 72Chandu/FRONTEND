import React, { useState } from 'react';
import "./index.css";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SecondPage from './components/SecondPage';
import Card from './components/Card';
import Card1 from './components/Card1';
function App(){ // any funtion that return jsx is component
  // return (
  //   <h1>i am in App.js return </h1>  // it will convert into React.createElement('h1',null,'i will return')
  // )

  // return (  // when we want to return more than one then we bind it in div
  //   <div>
  //     <h1>i am in App.js return </h1>  
  //     <Navbar/>
  //     <Hero/> 
  //     <SecondPage/>
  //   </div>
  // );
  
  // const data=["chandu","chandu yadav","harsh gujral"];
  // return (
  //   <div>
  //     {data.map((item, index) => {
  //       return ( // Add return here
  //         <div key={index} className='px-3 py-4 bg-zinc-300 rounded-md w-fit'>
  //           {item}
  //         </div>
  //       );
  //     })}
  //   </div>
  // );

  // return (
  //   <div>
  //     <Card/>
  //   </div>
  // );

  // return (
  //   //it is fragment 
  //   <> 
  //     <Card/>
  //     <h1>hello</h1>
  //     <Card1/>
  //   </>
  // );

  // const ans=useState(0);// it is array 0th idx is value and 1st idx is function to change value
  // console.log(ans[0]);
  
  const [val,setVal]=useState(12);
  const [val1,setVal1]=useState({name:"chandu",isbanned:false});
  const [val2,setVal2]=useState({name:"Raj",age:24});
  const [val3,setVal3]=useState([1,2,3,4,5,6]);
  return (
    <div className='p-5'>
      <h1>{val}</h1>
      <button onClick={() => setVal((prev) => prev + 1)} className="bg-blue-500 rounded text-xs text-white">change karo</button>
      
      <h1>Nmae: {val1.name}</h1>
      <h2>banned: {val1.isbanned.toString()}</h2>
      <button onClick={()=>setVal1({...val1,isbanned: !val1.isbanned})} className= {`${val1.isbanned ? "bg-blue-500":"bg-red-500"} rounded text-xs text-white`}>change</button>
      
      <button onClick={async function(){
        await setVal2({...val2,gender:"male"});
        await console.log(val2);
        }}
        className="bg-blue-500 rounded text-xs text-white m-5">add
      </button>
      
      {val3.map(item=><h1>{item}</h1>)}
      <button onClick={()=>setVal3(()=>{
        return val3.filter((item,idx)=>idx!=val3.length-1)
      })} 
      className='px-2 py-1 bg-blue-500'>Click
      </button>
    
    </div>
  );

}
export default App;
//https://www.youtube.com/watch?v=227LunUUt-E -> problem to solve tailwind css problem