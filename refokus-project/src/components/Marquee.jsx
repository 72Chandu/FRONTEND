import React from "react";
import {motion} from "framer-motion"
const Marquee = ({ imageurl ,direction}) => {
  return (
    <div className="flex w-full overflow-hidden">
    <motion.div initial={{x:direction==='left'? "0":"-100%"}} animate={{x:direction==='left'? "-100%":"0"}} transition={{ease:"linear",duration:15,repeat:Infinity}} className="flex flex-shrink-0 py-10 gap-40 pr-40">
      {imageurl.map((url, index) => (<img key={index} src={url} alt="Marquee Logo" className="filter invert brightness-0" />))}
    </motion.div>
    <motion.div initial={{x:direction==='left'? "0":"-100%"}} animate={{x:direction==='left'? "-100%":"0"}} transition={{ease:"linear",duration:15,repeat:Infinity}} className="flex flex-shrink-0 py-10 gap-40 pr-40">
      {imageurl.map((url, index) => (<img key={index} src={url} alt="Marquee Logo" className="filter invert brightness-0" />))}
    </motion.div>
    </div>
  );
};
export default Marquee;