import React from 'react';

function Card() {
  const data =[
    {Image: 'https://images.unsplash.com/photo-1513477967668-2aaf11838bd6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFpbHklMjBvYmplY3R8ZW58MHx8MHx8fDA%3D', name: "Amazon Basics", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, inventore enim consequuntur itaque deserunt et.",instock:true},
    {Image: 'https://images.unsplash.com/photo-1520038410233-7141be7e6f97?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym94fGVufDB8fDB8fHww', name: "Daily Object", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, inventore enim consequuntur itaque deserunt et.",instock:false},
    {Image: 'https://images.unsplash.com/photo-1520038410233-7141be7e6f97?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym94fGVufDB8fDB8fHww', name: "Daily Object", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, inventore enim consequuntur itaque deserunt et.",instock:true},
  ];
  return (
    <div className="w-full h-screen bg-zinc-200 flex justify-center items-center gap-10">
      {data.map((item, index) => {
        return (
          <div key={index} className="w-52 bg-zinc-100 rounded-md overflow-hidden shadow-lg">
            <div className="w-full h-32 bg-zinc-300">
              <img className="w-full h-full object-cover" src={item.Image} alt="Product" />
            </div>
            <div className="w-full px-3 py-4">
              <h2 className="font-semibold">{item.name}</h2>
              <p className="text-xs mt-3"> {item.description}</p>
              <button className={`px-4 py-1 ${item.instock?'bg-sky-600':'bg-red-600'} text-xs rounded text-zinc-100 mt-3`}>
                {item.instock ? 'Add to Cart' : 'Out of Stock'}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );

  // return (
  //   <div className="w-full h-screen bg-zinc-200 flex justify-center items-center gap-10">
  //     <div className="w-52 bg-zinc-100 rounded-md overflow-hidden shadow-lg">
  //       <div className="w-full h-32 bg-zinc-300">
  //         <img className="w-full h-full object-cover" src="https://via.placeholder.com/150" alt="Product" />
  //       </div>
  //       <div className="w-full px-3 py-4">
  //         <h2 className="font-semibold">Amazon Basics</h2>
  //         <p className="text-xs mt-3">
  //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, inventore enim consequuntur itaque deserunt et.
  //         </p>
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default Card;
