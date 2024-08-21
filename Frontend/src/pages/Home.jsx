import React from 'react'
import { InputBox, Button,Loader } from '../components/index.js'
import Error from '../components/Toasts/Error.jsx'

function Home() {
  const [error, setError] = React.useState(false)
  const [errorMessage, setErrorMessage] = React.useState("")
  const [originalUrl, setOriginalUrl] = React.useState("")
  const [customUrl,setCustomUrl] = React.useState("")
  const [Loading,setLoading] = React.useState(false)
  
  const urlPattern = "/https?:\/\/(www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+(\/[a-zA-Z0-9-._~:\/?#[\]@!$&'()*+,;%=]*)?/";

  const handleOriginalUrl = (e) =>{
    let validate = e.target.value.replace(urlPattern,"")
    setOriginalUrl(validate)
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
            <InputBox placeholder="Enter a custom URL" style="w-[90%]" value={customUrl} />
          </div>
        </div>
        <Button text={Loading ? <Loader/> : "Shorten URL"} style="w-full text-center mt-5"/>
      </div>
    </div>
  )
}

export default Home