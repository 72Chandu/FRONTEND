import React from 'react'
import Card from './Card'
function Cards({users,handelRemove}) {
  return (
    <div className='w-full p-4 flex justify-center gap-4 max-h-96 overflow-auto'>
      {users.map((item,idx)=>{
        return <Card key={idx} user={item} handelRemove={handelRemove} index={idx}/>
      })}
    </div>
  )
}
export default Cards