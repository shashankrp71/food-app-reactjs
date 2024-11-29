import React, { useState } from 'react'
import { IoCloseCircleOutline } from "react-icons/io5";
import CartItemCard from './CartItemCard';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from "react-icons/fa";
const Cart = () => {
  const cartItems = useSelector((state)=>state.cart.cart);
 
  const [activeCart,setActiveCart] = useState(false);
  
  const handleCart = ()=>{
    setActiveCart(!activeCart)
  }
  return (
    <>
       {/* top */}
      <div className={`fixed  z-50 right-0 top-0 w-full lg:w-[20vw] h-full bg-white px-4 ${activeCart?"translate-x-0  transition-all ease-linear duration-[.5s]":"translate-x-full  transition-all ease-linear duration-[.5s]"}`}>
        <div className='flex my-3 py-4 px-1 justify-between'>
            <h1 className='text-gray-800 font-bold text-xl'>My Order</h1>
            <IoCloseCircleOutline onClick={handleCart} size={"30px"} className='text-gray-600 hover:text-red-500 cursor-pointer'/>
        </div>

        {
          cartItems.map((data)=>{
              return <CartItemCard data={data} key={data.id}></CartItemCard>
          })
        }
        {/* bottom */}
        <div className='absolute bottom-7'>
            <h3>Items : </h3>
            <h3>Total Amount : </h3>
            <hr className='w-[90vw] lg:w-[18vw] my-2'/>
            <button className='px-3 py-2 bg-green-500 rounded-lg font-bold text-white hover:bg-green-600 w-[90vw] lg:w-[18vw]' >Checkout</button>
        </div>
        
      </div>
      <FaShoppingCart className='text-5xl p-3 bg-gray-800 rounded-2xl text-white fixed bottom-6 right-6 shadow-xl z-0' onClick={handleCart}/>
    </>
  )
}

export default Cart
