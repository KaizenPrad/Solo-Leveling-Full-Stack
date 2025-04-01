import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
   <>
    <div className="nav h-17 border-white border-2 bg-black flex justify-between m-0 text-white  font-bold">
       <img src="./Logo.png "alt=""  className='height-[68px]'/>
        <ul className='flex gap-9 text-lg py-5 px-18'>
            <li>
                <Link to="/Home" className='hover:scale 130 '>Home</Link>
            </li>
            <li>
            <Link to="/Episodes" className=''>Episodes</Link>
            </li>
            <li>
                <Link to="/Comments" className=''>Comments</Link>
            </li>
            <li>
                <Link to="/About" className=''>About</Link>
            </li>
        </ul>
    </div>
   </>
  )
}

export default Navbar