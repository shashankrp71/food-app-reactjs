import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import CategoryMenu from '../Components/CategoryMenu'
import ItemCard from '../Components/ItemCard'
import FoodCard from '../Components/FoodCard'
import Cart from '../Components/Cart'

const Home = () => {
  // Main Page
  return (
    <div className='w-full h-full bg-gray-100'>
      <Navbar></Navbar>
      <CategoryMenu></CategoryMenu>
      <FoodCard></FoodCard>
      <Cart></Cart>
    </div>
  )
}

export default Home
