//understanding useEffect
import React, { useState ,useEffect } from 'react'

function Services() {
    const [first,setfirst]=useState("this is normal data");
    const [second,setsecond]=useState("this is very large data");
    //referse is creation of deletation and creation 
    
    // useEffect(()=>{ //services component is re-rendering 
    //     console.log("Services component is created"); //jab hum services pe click karege
    //     return ()=>{
    //         console.log("Services component is deleted");//jab hum services se dusra jagah jayege
    //     }
    // })

    // useEffect(()=>{ // component is updating. data is change but this message is not shown
    //     console.log("Services component is created"); 
    //     return ()=>{
    //         console.log("Services component is deleted");
    //     }
    // },[])//[]-> avoiding from re rendering of entire component. onley the updated part is updationg 
    
    useEffect(()=>{ 
        console.log("Services component is created");
        return ()=>{
            console.log("Services component is deleted");
        }
    },[second])//when we hit second  then entire services component get refresh/re-rendering  

    return (
    <div>
        <h1>{first}</h1>
        <button onClick={()=>setfirst("Normal data has been changed")} className='rounded mb-10 bg-blue-200 p-2'>change normal data</button>
        <h1>{second}</h1>
        <button onClick={()=>setsecond("large data has been changed")} className='rounded mb-10 bg-blue-200 p-2'>change large data</button>
    </div>
    )
}
export default Services