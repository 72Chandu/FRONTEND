import React from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Stripes from './components/Stripes'
import Products from './components/Products'

const App = () => {
  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white font-extralight'>
      <Navbar/>
      <Work/>
      <Stripes/>
      <Products/>
    </div>
  )
}

export default App