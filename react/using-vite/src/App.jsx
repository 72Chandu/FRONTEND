import React, { useState } from 'react';
import "./index.css";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SecondPage from './components/SecondPage';
import Card from './components/Card';
import Card1 from './components/Card1';
import Card2 from './components/Card2';
import Props from './components/Props'; 
import Props2 from './components/Props2';
function App(){ // any funtion that return jsx is component
  // return (
  //   <h1>i am in App.js return </h1>  // it will convert into React.createElement('h1',null,'i will return')
  // )

  // return (  // when we want to return more than one then we bind it in div
  //   <div>
  //     <h1>i am in App.js return </h1>  
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
  
  /*
  const [val,setVal]=useState(12);
  const [val1,setVal1]=useState({name:"chandu",isbanned:false});
  const [val2,setVal2]=useState({name:"Raj",age:24});
  const [val3,setVal3]=useState([1,2,3,4,5,6]);
  const [val4,setVal4]=useState([11,12,13,14,15,16]);
  const [val5,setVal5]=useState([11,12,13,14,15,16]);
  const [val6,setVal6]=useState([11,12,13,14,15,16]);
  const [val7,setVal7]=useState([{name:"chandu",age:22},{name:"shivam",age:32},{name:"sunder",age:40}]);
  return (
    <div className='p-5 '>
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

      {val4.map(item=><h1>{item}</h1>)}
      <button onClick={()=>setVal4(()=>val4.filter((item,idx)=>idx!=2)
      )} 
      className='px-2 py-1 bg-blue-500'>Click
      </button>

      {val5.map(item=><h1>{item}</h1>)}
      <button onClick={()=>setVal5(()=>val5.filter((item,idx)=>item%2!==0)
      )} 
      className='px-2 py-1 bg-blue-500'>remove ele % 2
      </button>

      {val6.map(item=><h1>{item}</h1>)}
      <button onClick={()=>setVal6([...val6,17])} 
      className='px-2 py-1 bg-blue-500'>add a number
      </button>

      {val7.map((item) => (
  <div key={item.name}>
    <h1>{item.name}</h1>
    <h2>{item.age}</h2>
  </div>
))}

<button
  onClick={() =>
    setVal7((prevVal) =>
      prevVal.map((item) =>
        item.name === "shival" ? { name: "shivam", age: 26 } : item
      )
    )
  }
  className="px-2 py-1 bg-blue-500">Add a number
</button>

    
    </div>
  );
*/
  
  // return (
  //   <div>
  //     <Card2/>
  //   </div>
  // );

  
  // const data=[
  //   {name:"chandu",profession:"coder",image:"https://images.unsplash.com/photo-1519764622345-23439dd774f7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym95c3xlbnwwfHwwfHx8MA%3D%3D",friend:false},
  //   {name:"shival",profession:"teacher",image:"https://images.unsplash.com/photo-1604073536770-8a33e332f830?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJveXN8ZW58MHx8MHx8fDA%3D",friend:false},
  //   {name:"dawal",profession:"developer",image:"https://images.unsplash.com/photo-1602546005687-372f3c6455ed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJveXN8ZW58MHx8MHx8fDA%3D",friend:false},
  //   {name:"snadal",profession:"laundabaaz",image:"https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJveXN8ZW58MHx8MHx8fDA%3D",friend:false},
  // ];
  // const [realData,setRealData]=useState(data);
  // const handelFndBtn=(caredidx)=>{  // jab hum button pe click karenge to ye function call hoga and caredidx me index aayega
  //   setRealData((prev)=>{ //prev is a state of data array
  //     return prev.map((item,idx)=>{
  //       if(idx===caredidx){
  //         return {...item,friend:!item.friend}
  //       }
  //       return item;
  //     })
  //   })
  // }
  // return (
  //   <>
  //   <div className='w-full h-screen bg-zinc-300 flex gap-4 items-center justify-center'> 
  //     {realData.map((item,idx)=>( //har card ka idx ja raha hai
  //       <Props key={idx} idx={idx} image={item.image} name={item.name} profession={item.profession} handelClick={handelFndBtn} friend={item.friend} />
  //     ))}
  //   </div>
  //   </>
  // );
  

  const data1 = [
    { name: "Challenger", artist: "Satal", added: false, image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWN8ZW58MHx8MHx8fDA%3D" },
    { name: "One Day", artist: "Dalal", added: false, image: "https://images.unsplash.com/photo-1619983081563-430f63602796?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWN8ZW58MHx8MHx8fDA%3D" },
    { name: "One Love", artist: "Akashey", added: false, image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG11c2ljfGVufDB8fDB8fHww" },
    { name: "Chura Ke", artist: "Honey Singh", added: false, image: "https://media.istockphoto.com/id/894058154/photo/musical-instruments.webp?a=1&b=1&s=612x612&w=0&k=20&c=rK177VUM4bcUTzVfQcWmLoyxSmz_vl0O1pqA-s8Hcgg=" },
    { name: "Palang", artist: "Khesari", added: false, image: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG11c2ljfGVufDB8fDB8fHww" },
  ];
  
    const [songData, setSongData] = useState(data1);
    const handelClick=(idx)=>{
      //alert(idx);
      setSongData((prev)=>{
        return prev.map((item,itemidx)=>{
          if(itemidx===idx){
            return {...item,added:!item.added}
          }
          return item;
        })
      })
    }
    return (
      <div className="w-full h-screen bg-zinc-300">
        <Navbar value={songData}/>
        <div className="px-20 flex gap-10 mt-10 flex-wrap">
          {songData.map((obj, idx) => (
            <Props2 key={idx} value={obj} handelClick={handelClick} idx={idx} />
          ))}
        </div>
      </div>
    );
}
export default App;
//https://www.youtube.com/watch?v=227LunUUt-E -> problem to solve tailwind css problem