import React from 'react'
import { InputBox, Button,Loader } from '../components/index.js'
import Error from '../components/Toasts/Error.jsx'
import { urlHandler } from '../backendConfig/urlHandler.js'

function Home() {
  const [error, setError] = React.useState(false)
  const [errorMessage, setErrorMessage] = React.useState("")
  const [originalUrl, setOriginalUrl] = React.useState("")
  const [customUrl,setCustomUrl] = React.useState("")
  const [Loading,setLoading] = React.useState(false)

  const handleOriginalUrl = (e) => {
    setOriginalUrl(e.target.value)
  }

  const handleCustomUrl = (e) => {
    setCustomUrl(e.target.value)
  }

  const createCustomUrl = async() =>{
    setLoading(true)
    const createdUrl = await urlHandler.createShortenUrl(originalUrl,customUrl)
    console.log(createdUrl)
    setLoading(false)
  }
  

  return (
    <div className='font-text-font'>
     {error ? <Error message={errorMessage} setError={setError}/> : null}
      <div className='py-5 px-2 sm:px-10 '>
        <div className='font-bold text-3xl pb-5'>Shorten Your URL</div>

        <div className='w-full sm:flex'>

          <div className='sm:w-[50%]'>
            <div className='pb-2'>
              Original Url
            </div>
            <InputBox fn={handleOriginalUrl} placeholder="Enter your URL" style="w-[90%]" value={originalUrl}/>
          </div>

          <div className='sm:w-[50%]'>
            <div className='pb-2'>
              Custom Url 
            </div>
            <InputBox fn={handleCustomUrl} placeholder="Enter a custom URL" style="w-[90%]" value={customUrl} />
          </div>
        </div>
        <Button fn={createCustomUrl} text={Loading ? <Loader/> : "Shorten URL"} style="w-full text-center mt-5"/>
      </div>
    </div>
  )
}

export default Home