import React from 'react';
function Props2({ value,handelClick,idx }) {
  const { name, artist, image, added } = value;
  return (
    <div className="w-60 bg-zinc-100 p-4 rounded-md flex gap-4 pb-12 relative mt-10 shadow-md">
      <div className="w-20 h-20 bg-orange-600 rounded-md"><img className="w-full h-full object-cover" src={image} alt="image not found" /></div>
      <div>
        <h3 className="text-xl font-semibold leading-none">{name}</h3>
        <h6 className="text-sm text-gray-600">{artist}</h6>
      </div>
      <button onClick={()=>handelClick(idx)} className={`px-4 py-2 text-white text-xs rounded-full absolute bottom-2 left-1/2 -translate-x-1/2 ${added ? 'bg-blue-600' : 'bg-orange-500'}`}>{added ? 'Added' : 'Add to Favourites'}</button>
    </div>
  );
}
export default Props2;