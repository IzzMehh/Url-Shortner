import React from 'react'
import { InputBox, Button, Loader,Error,Success } from '../components/index.js'
import { urlHandler } from '../backendConfig/urlHandler.js'

function Home() {
  const [error, setError] = React.useState(false)
  const [errorMessage, setErrorMessage] = React.useState("")

  const [success,setSuccess] = React.useState(false)
  const [successMessage, setSuccessMessage] = React.useState("")
  
  const [originalUrl, setOriginalUrl] = React.useState("")
  const [customUrl, setCustomUrl] = React.useState("")
  const [Loading, setLoading] = React.useState(false)

  const handleOriginalUrl = (e) => {
    setOriginalUrl(e.target.value)
  }

  const handleCustomUrl = (e) => {
    setCustomUrl(e.target.value)
  }

  const createCustomUrl = async () => {
    try {
      setLoading(true)
      await urlHandler.createShortenUrl(originalUrl, customUrl)
      setSuccessMessage("Successfully created!!")
      setSuccess(true)
    } catch (error) {
      setErrorMessage(error.message)
      setError(true)
    }
    finally{
      setLoading(false)
    }
  }


  return (
    <div className='font-text-font'>
      {success ? <Success message={successMessage} setSuccess={setSuccess} /> : null}
      {error ? <Error message={errorMessage} setError={setError} /> : null}
      <div className='py-5 px-2 sm:px-10 '>
        <div className='font-bold text-3xl pb-5'>Shorten Your URL</div>

        <div className='w-full sm:flex'>

          <div className='sm:w-[50%]'>
            <div className='pb-2'>
              Original Url
            </div>
            <InputBox fn={handleOriginalUrl} placeholder="Enter your URL" style="w-[90%]" value={originalUrl} />
          </div>

          <div className='sm:w-[50%]'>
            <div className='pb-2'>
              Custom Url
            </div>
            <InputBox fn={handleCustomUrl} placeholder="Enter a custom URL" style="w-[90%]" value={customUrl} />
          </div>
        </div>
        <Button fn={createCustomUrl} text={Loading ? <Loader /> : "Shorten URL"} style="w-full text-center mt-5" />
      </div>
    </div>
  )
}

export default Home