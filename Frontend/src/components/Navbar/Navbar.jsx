import React from 'react'

function Navbar() {
  return (
    <div className='w-full bg-black h-[80px] text-white font-text-font' >
      <div className='flex'>
        <div className='text-4xl font-bold pl-5 pt-5 w-[70%]'>
          URL Shortener
          </div>

        <div className='text-xl font-semibold mt-8 hover:underline cursor-pointer'>
          Analytics
        </div>
        <div className='text-xl font-semibold mt-8 hover:underline cursor-pointer ml-5'>
          About
        </div>
      </div>
    </div>
  )
}

export default Navbar