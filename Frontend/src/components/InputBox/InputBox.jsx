import React from 'react'

function InputBox({style,placeholder, fn, value}) {
  return (
<input
  className={`px-4 py-3 outline-none rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040] ${style}`}
  name="text"
  onChange={(e)=>fn(e)}
  placeholder={placeholder}
  type="text"
  value={value}
/>

  )
}

export default InputBox