import React from 'react'

function Button({text, style, fn}) {
  return (
<button onClick={fn} className={`cursor-pointer group relative  gap-1.5 px-8 py-4 bg-black bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md ${style}`}>
  {text}
</button>
  )
}

export default Button