import React from 'react'
import { Navbar, InputBox, Button } from '../components/index.js'

function Home() {
  return (
    <div className='font-text-font'>
      <Navbar />
      <div className='py-5 px-10 '>
        <div className='font-bold text-3xl pb-5'>Shorten Your URL</div>

        <div className='w-full flex'>

          <div className='w-[50%]'>
            <div className='pb-2'>
              Original Url
            </div>
            <InputBox placeholder="Enter your URL" style="w-[90%]" />
          </div>

          <div className='w-[50%]'>
            <div className='pb-2'>
              Custom Url 
            </div>
            <InputBox placeholder="Enter a custom URL" style="w-[90%]" />
          </div>
        </div>
        <Button text="Shorten URL" style="w-full text-center mt-5"/>
      </div>
    </div>
  )
}

export default Home