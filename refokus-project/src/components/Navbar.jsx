import React from 'react';
import Button from './Button';
import { GoArrowUpLeft } from "react-icons/go";
const Navbar = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-6 flex items-center justify-between border-b-[1px] border-zinc-700">
      <div className='nleft flex items-center'>
        <i className="text-white flex items-center gap-2"><GoArrowUpLeft className="text-white text-xl" /> Refokus</i>
        <div className='Links flex gap-14 ml-20'>
          {["Home", "Work", "Culture", "", "News"].map((elem, idx) =>
            elem === "" ? (<span key={idx} className='w-[2px] h-7 bg-zinc-700'></span>) : (<a key={idx} className='text-sm items-center gap-1 font-regular' href='#'>
                {idx === 1 && ( <span style={{ boxShadow: "0 0 0.45em #00FF19" }} className='inline-block w-1 h-1 rounded-full bg-green-500'></span>)}
                {elem}
              </a>
            ))}
        </div>
      </div>
      <Button />
    </div>
  );
};

export default Navbar;
