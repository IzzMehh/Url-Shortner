import React from 'react'
import { InputBox, Button,Card} from '../components/index.js'
import { useParams } from 'react-router'

function Analytics() {

  const { customUrlParams } = useParams()

  const customUrl = customUrlParams || null

  const isParamsGiven = customUrl ? true : false  

  console.log(isParamsGiven)

  React.useEffect(()=>{
    if(isParamsGiven){
      const data = fetch(`https://localhost:4000/api/url/${customUrl}`)
    }
  })

  return (
    <>
    <div className='w-[90%] sm:w-[60%] m-auto text-center'>
    <InputBox placeholder={"Enter your URL"} style={"w-full mt-5"}/>
    <Button text={"Find"} style={"mt-5"}/>
    </div>

    <div>
      <Card/>
      <Card/>
    </div>


    </>
  )
}

export default Analytics