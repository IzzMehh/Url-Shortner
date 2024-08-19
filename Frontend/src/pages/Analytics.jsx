import React from 'react'
import { InputBox, Button } from '../components/index.js'

function Analytics() {
  return (
    <>
    <div className='w-[90%] sm:w-[60%] m-auto text-center'>
    <InputBox placeholder={"Enter your URL"} style={"w-full mt-5"}/>
    <Button text={"Find"} style={"mt-5"}/>
    </div>

    <div>
      
    </div>


    </>
  )
}

export default Analytics