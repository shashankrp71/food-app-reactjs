import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import axios from 'axios'
import ProductCard from './Components/ProductCard'
import ItemCard from './Components/ItemCard'
import { BrowserRouter, createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import Success from './Pages/Success'
import Error from './Pages/Error'
import './index.css'
const App = () => {
  const router = createBrowserRouter([
    {
      path : "/",
      element:<Home></Home>,
      children:[
        {
          path : "success",
          element : <Success></Success>
        },{
          path : "/*",
          element:<Error></Error>
        }
      ]
    }
  ])
  return (
    <div >
      {/* <Navbar data={"hello"} data1={"hello"} data2={"hello"} data3={"hello"}></Navbar>
      <Navbar data={"dello"}></Navbar> */}
      
        {/* <div className='flex items-center justify-evenly'>
          <ProductCard></ProductCard>
          <ItemCard></ItemCard>
        </div> */}
        <RouterProvider router={router}></RouterProvider>

    </div>
  )
}

export default App
