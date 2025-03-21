import React from 'react'

const Stripe = ({ val }) => {
  return (
    <div className="w-[16.66%] px-4 py-3 border-t-[1.2px] border-b-[1.2px] border-r-[1.2px] border-zinc-700 flex items-center justify-between">
      {/* Image with auto-width & max width control */}
      <img className="h-6 max-w-[60%] filter invert brightness-0" src={val.url} alt="" />
      
      {/* Number adjusted with flex shrink */}
      <span className="font-semibold text-sm truncate">{val.number}</span>
    </div>
  )
}

export default Stripe
