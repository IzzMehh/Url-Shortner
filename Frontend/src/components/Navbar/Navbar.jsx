import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='w-full bg-black h-[60px] sm:h-[80px] text-white font-text-font' >
      <div className='flex'>
        <div className='text-xl sm:text-4xl font-bold pl-5 pt-5 w-[60%] sm:w-[70%]'>
        <Link to={"/home"}>URL shortener</Link>
        </div>

        <div className='text-sm sm:text-xl font-semibold mt-7 hover:underline cursor-pointer'>
          <NavLink to={"analytics"} className={({ isActive }) => `${isActive ? 'underline' : null}`}>Analytics</NavLink>
        </div>
        <div className='text-sm sm:text-xl font-semibold mt-7 hover:underline cursor-pointer ml-3'>
          <NavLink to={"about"} className={({ isActive }) => `${isActive ? 'underline' : null}`}>About</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar