import React from 'react'

const Navbar = () => {
  return (
   
      <nav className="flex w-full h-20 flex-row max-sm:flex-col max-sm:h-28 px-12 py-2 bg-gray-50 items-center justify-between ">

        <div >
          <h1 className='text-3xl font-black italic text-gray-900'>Zomato</h1>
          <p className='text-xs text-gray-500 uppercase'>the food app</p>
        </div>
        <div>
          <input type="text" name="search" placeholder='Search food here' className='w-72 h-auto bg-slate-50 px-3 py-2 border-gray-400 border rounded-lg outline-none max-sm:w-60 max-sm:py-1'/>
        </div>
      </nav>
    
  )
}

export default Navbar
