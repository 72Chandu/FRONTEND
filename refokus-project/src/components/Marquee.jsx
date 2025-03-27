import React from "react";

const Marquee = ({ imageurl }) => {
  return (
    <div className="flex py-8 w-full  gap-20 whitespace-nowrap overflow-hidden">
      {imageurl.map((url, index) => (<img key={index} src={url} alt="Marquee Logo" className="filter invert brightness-0 w-[6vw] flex-shrink-0" />))}
      {imageurl.map((url, index) => (<img key={index} src={url} alt="Marquee Logo" className="filter invert brightness-0 flex-shrink-0" />))}
    </div>
  );
};
export default Marquee;