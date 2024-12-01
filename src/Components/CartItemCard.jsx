import React from 'react'
import { AiOutlinePlus,AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import {removeFromCart,incrementQty,decrementQty} from '/src/redux/Slices/CartSlice.jsx'
const CartItemCard = (data) => {
  const {id,img,name,price,desc,category,rating,qty} = data.data;
  console.log(data);
  const dispatcher = useDispatch()
  return (
    <div className='flex gap-4 shadow-lg rounded-lg items-center px-3 py-2 mb-3'>
      <MdDelete className='absolute right-7 text-gray-600 hover:text-red-500 cursor-pointer' onClick={()=>dispatcher(removeFromCart({id}))}></MdDelete>
        {/* image of the food */}
        <img src={img} alt="" className='w-[50px] h-[50px]'/>
      <div className='leading-5'>
          {/* Title of the food and its details*/}
          <h3 className='text-lg font-semibold'>{name}</h3>
          <div className='flex items-center justify-between'>
            <span className='font-bold text-green-500'>₹{price}</span>
            <div className='flex gap-2 items-center justify-between'>
                <AiOutlinePlus onClick={()=>dispatcher(incrementQty({id}))} className='border-2 border-gray-600 p-1 text-xl rounded-md hover:text-white hover:bg-green-400 hover:border-none transition-all ease-linear cursor-pointer'></AiOutlinePlus>
                <span className='font-bold text-green-500'>{qty}</span>
                <AiOutlineMinus onClick={()=>qty<=1?1:dispatcher(decrementQty({id}))} className='border-2 border-gray-600 p-1 text-xl rounded-md hover:text-white hover:bg-green-400 hover:border-none transition-all ease-linear cursor-pointer'></AiOutlineMinus>
            </div>
          </div>
      </div>            
    </div>
  )
}

export default CartItemCard
