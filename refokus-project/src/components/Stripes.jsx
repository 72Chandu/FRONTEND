import React from 'react'
import Stripe from './Stripe'

const Stripes = () => {
  var data=[
    {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d300a4cce143f24735d3_sevdesk-black.svg",number:48},
    {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359ba3497cf06ff9e8f71_633c14899b819b7aafbbcde1_627a8da607be73fd13e76134_basf.svg",number:2},
    {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/679b7bf9533879784a0cf5fa_logo-onLight.svg",number:11},
    {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/66979aab7dc661744003a210_logo-black.svg",number:2},
    {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/679b89a37dd20bc1a6b9c8da_deelogo-onLight.svg",number:11},
    {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/679b89a37dd20bc1a6b9c8da_deelogo-onLight.svg",number:11},
  ]
  return (
    <div className='flex items-center mt-20'>
      {data.map((ele,idx)=>(
          <Stripe val={ele}/>
      ))}
      
    </div>
  )
}
export default Stripes