import React from 'react'
import { useParams } from 'react-router'
import { urlHandler } from '../backendConfig/urlHandler'
import { Error } from '../components/index.js'

function Redirect() {
  const { customUrl } = useParams()
  const [error, setError] = React.useState(false)
  const [errorMessage, setErorMessage] = React.useState("")

  const redirect = async () => {
    try {
      const res = await urlHandler.getUrl(customUrl)
      window.location.assign(`${res.originalUrl}`)
    } catch (error) {
      setErorMessage(error.message)
      setError(true)
    }
  }

  React.useEffect(() => {
    redirect()
  }, [])
  return (
    <>
      {error ? <Error message={errorMessage} /> : null}
    </>
  )
}

export default Redirect