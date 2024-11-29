import axios from 'axios';
import React, { useState } from 'react'
import { IoMdStar } from "react-icons/io";
const ItemCard = ( data) => {
  const {img,name,price,desc,category,rating} = data.data;
  return (
    <div >
        <div className='h-[300px] w-[250px] rounded-lg shadow-xl p-3 flex flex-col items-center gap-2 ' >
            <div className='hover:scale-105 transition-all duration-100 ease-in-out'>
                <img src={img} alt="" className='h-[170px] w-[180px]'/>
            </div>
            <div className='flex justify-between w-full px-3'>
              <h1 className='font-bold text-[18px]'>{name}</h1>
             <h1 className='font-bold text-[18px] text-green-500'>₹{price}</h1></div>
            
            <p className='overflow-y-hidden px-3'>{desc}</p>
            <div className='flex justify-between w-full px-3'>
              <h1 className='font-bold flex items-center' >{rating}<span><IoMdStar color='gold'/></span></h1>
            <button className='px-2 py-1 bg-green-400  rounded-md text-white font-bold' > Add cart</button>
            </div>
        </div>
    </div>
  )
}

export default ItemCard
