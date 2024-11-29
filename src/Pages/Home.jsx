import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import CategoryMenu from '../Components/CategoryMenu'
import ItemCard from '../Components/ItemCard'
import FoodCard from '../Components/FoodCard'
import Cart from '../Components/Cart'

const Home = () => {
  return (
    <div className='w-full h-full bg-gray-100'>
      <Navbar></Navbar>
      <CategoryMenu></CategoryMenu>
      <FoodCard></FoodCard>
      <Cart></Cart>
      {/* <Link to={"success"}>Success</Link>
      <Outlet></Outlet> */}
    </div>
  )
}

export default Home
