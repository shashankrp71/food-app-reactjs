import React from 'react'

const CategoryMenu = () => {
  return (
    <div className='my-3 ml-6 font-semibold'>
        Find the Food here

        <div className='mt-2 flex gap-2  overflow-x-scroll lg:overflow-x-hidden'>
            <button className='font-bold px-2 py-1 bg-gray-300 rounded-lg hover:bg-green-500 hover:text-white'>All</button>
            <button className='font-bold px-2 py-1 bg-gray-300 rounded-lg hover:bg-green-500 hover:text-white'>Veg</button>
            <button className='font-bold px-2 py-1 bg-gray-300 rounded-lg hover:bg-green-500 hover:text-white'>Non</button>
            <button className='font-bold px-2 py-1 bg-gray-300 rounded-lg hover:bg-green-500 hover:text-white'>egg</button>
            <button className='font-bold px-2 py-1 bg-gray-300 rounded-lg hover:bg-green-500 hover:text-white'>snacks</button>
            <button className='font-bold px-2 py-1 bg-gray-300 rounded-lg hover:bg-green-500 hover:text-white'>snacks</button>
       
       
        </div>
    </div>
  )
}

export default CategoryMenu
