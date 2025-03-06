import React from 'react'

function Props({image,name,profession,handelClick,idx,friend}) {
  return (
    <div className='w-52 bg-white rounded-md overflow-hidden'>
      <div className='w-full h-45 bg-sky-200'><img src={image} alt='image is not found' className='w-full h-full object-[center_top]' /></div>
      <div className='w-full p-3'>
        <h3 className='text-xl font-semibold'>{name}</h3>
        <h5 className='text-xl'>{profession}</h5>
        <button onClick={()=>handelClick(idx)} className={`mt-5 px-3 py-1 text-xs text-white ${friend===true ? "bg-green-600":"bg-blue-500"} font-semibold rounded-md`}>{friend===true ? "Remove Friend":"Add Friend"}</button>
      </div>
    </div>
  )
}

export default Props;
/*
props use hote hai aapke components ko resusable ke liye consicer karo aapke pass ek bottom hai us butoom ko alag jagah daalna 
hai aap me to aap ek button component banaaye and useka data hard coded karne ki jagah parent component se send karde and child 
component par use kar le 
*/