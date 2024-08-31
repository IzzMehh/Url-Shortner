import React from 'react'
import { InputBox, Button, Card, Error, Loader} from '../components/index.js'
import { useParams } from 'react-router'
import { urlHandler } from '../backendConfig/urlHandler.js'
import moment from "moment"


function Analytics() {

  const { customUrlParams } = useParams()
  const isParamsGiven = customUrlParams ? customUrlParams : ""

  const [data,setData] = React.useState(false)
  const [customUrl, setCustomUrl] = React.useState(isParamsGiven)

  const [error, setError] = React.useState(false)
  const [errorMessage, setErrorMessage] = React.useState("")

  const [loading,setLoading] = React.useState(false)

  const currentTime = moment().format('h:m:s A')

  const fetchData = async() => {
   try {
    setLoading(true)
     const data = await urlHandler.getUrl(customUrl)
     setData(data)
   } catch (error) {
    setErrorMessage(error.message)
    setError(true)
   }
   finally{
    setLoading(false)
   }
  }

  const handleCustomUrl = (e) => {
    setCustomUrl(e.target.value)
  }

  const handleButton = () =>{
    if(customUrl){
    fetchData()
    }else{
      setErrorMessage("Enter the custom Url!!")
      setError(true)
    }
  }


  React.useEffect(()=>{
    if(isParamsGiven){
      fetchData()
    }
  },[])

  return (
    <>
    {error ? <Error message={errorMessage} setError={setError}/> : null}
    <div className='w-[90%] sm:w-[60%] m-auto text-center'>
    <InputBox fn={handleCustomUrl} value={customUrl} placeholder={"Enter your URL"} style={"w-full mt-5"}/>
    <Button fn={handleButton} text={loading ? <Loader/> : "Find"} style={"mt-5"}/>
    </div>

    <div>
      {data 
      ? <>
      
      <Card title={data.customUrl} description={`Original Url: ${data.originalUrl}`} currentTime={currentTime}/> 
      <div className='md:flex m-auto'>
      <Card title={"Total Visitors"} description={data.totalVisitors} currentTime={currentTime}/>
      <Card title={"New Visitors"} description={data.newVisitors} currentTime={currentTime}/>
      </div>
      </>
    : null}
    </div>


    </>
  )
}

export default Analytics