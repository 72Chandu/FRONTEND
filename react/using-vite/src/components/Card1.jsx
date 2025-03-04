//handling event in react
import React from 'react'
function Card1() {
    const data = [
        { name: "Mahiya ve", desc: "Lorem ipsum dolor sit, amet consectetur accusamus!" },
        { name: "Junoon", desc: "Lorem ipsum dolor sit, amet consectetur accusamus!" },
    ];
    const handelClickDownload=()=>{
        alert("downloaded");
    }
    return (
        <div className='w-full h-screen bg-zinc-300 flex flex-col gap-4 items-center justify-center'>
            {data.map((item, index) => (
                <div key={index} className='w-90 px-3 py-2 bg-zinc-100 rounded-md'>
                    <h3 className='font-semibold text-xl'>{item.name}</h3>
                    <p className='text-xs mt-2'>{item.desc}</p> 
                    <button onClick={handelClickDownload} className='px-2 py-1 bg-blue-400 text-xs font-semibold text-zinc-100 rounded mt-3'>Download Now</button>
                </div>
            ))}
        </div>
    )
}
export default Card1