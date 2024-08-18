import React from 'react'

function InputBox({style,placeholder}) {
  return (
<input
  class={`px-4 py-3 outline-none rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040] ${style}`}
  name="text"
  placeholder={placeholder}
  type="text"
/>

  )
}

export default InputBox