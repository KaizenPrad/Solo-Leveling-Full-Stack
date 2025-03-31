import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
   <>
    <div className="nav h-17 bg-black flex justify-between m-0 text-white  font-bold">
       <img src="./Logo.png "alt=""  className='height-[68px]'/>
        <ul className='flex gap-9 text-lg py-5 px-18'>
            <li>
                <Link to="/Characters">Characters</Link>
            </li>
            <li>
            <Link to="/Episodes">Episodes</Link>
            </li>
            <li>
                <Link to="/Comments">Comments</Link>
            </li>
            <li>
                <Link to="/About">About</Link>
            </li>
        </ul>
    </div>
   </>
  )
}

export default Navbar