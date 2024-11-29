import React from 'react'
import { IoCloseCircleOutline } from "react-icons/io5";
const Cart = () => {
  return (
    <>
      <div className='fixed right-0 top-0 w-full lg:w-[20vw] h-full bg-white px-4'>
        <div className='flex my-3 py-4 px-1 justify-between'>
            <h1 className='text-gray-800 font-bold text-xl'>My Order</h1>
            <IoCloseCircleOutline size={"30px"} className='text-gray-600 hover:text-red-500 cursor-pointer'/>
        </div>
        <div className='absolute bottom-7'>
            <h3>Items : </h3>
            <h3>Total Amount : </h3>
            <hr className='w-[90vw] lg:w-[18vw] my-2'/>
            <button className='px-3 py-2 bg-green-500 rounded-lg font-bold text-white hover:bg-green-600 w-[90vw] lg:w-[18vw]'>Checkout</button>
        </div>
      </div>
      
    </>
  )
}

export default Cart
