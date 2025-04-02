import React from 'react'
import Navbar from '../components/Navbar'
import Arise from '../components/Arise'
import Card from '../components/Card'



const Home = () => {
  return (
   <>
   <div className='bg-black h-screen w-full'>
    <Navbar/>
    <Arise/>
    <div className="CardContainer border-red-900 border-10 my-5 mx-5 px-4 py-4 ">
    <Card/>
    </div>
   </div>
   </>
  )
}

export default Home