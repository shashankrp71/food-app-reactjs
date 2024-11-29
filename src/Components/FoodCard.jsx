import React from 'react'
import FoodData from '../db.js'
import ItemCard from '../Components/ItemCard'
const FoodCard = () => {
  return (
    <div className='flex flex-wrap gap-9 px-10 mt-4'>
      {
        FoodData.map((data)=>{
            return <ItemCard key={data.id} data={data}></ItemCard>
        })
      }
    </div>
  )
}

export default FoodCard
