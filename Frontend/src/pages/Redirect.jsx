import React from 'react'
import { useParams } from 'react-router'
import { urlHandler } from '../backendConfig/urlHandler'

function Redirect() {
    const { customUrl } = useParams()
    const redirect = async() =>{
        const res = await urlHandler.getUrl(customUrl)
        window.location.assign(`${res.originalUrl}`)
    }

    React.useEffect(()=>{
        redirect()
    },[])
  return (
    <></>
  )
}

export default Redirect