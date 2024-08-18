import React from 'react'
import { Navbar, InputBox } from '../components/index.js'

function Home() {
  return (
    <div className='font-text-font'>
        <Navbar/>
        <div className='py-5 px-10'>
        <div className='font-bold text-3xl pb-5'>Shorten Your URL</div>
        <div>
            Original Url
        </div>
        <InputBox/>
        </div>
    </div>
  )
}

export default Home