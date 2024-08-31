import React from 'react'

function Card({title,description,currentTime}) {
  return (
    <div className="m-auto bg-white rounded-lg shadow-lg overflow-hidden max-w-lg w-full">
        <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
            <p className="text-gray-700 leading-tight mb-4">
                {description}
            </p>
            <div className="flex justify-between items-center">
                <span className="text-gray-600">{`${currentTime}`}</span>
            </div>
        </div>
    </div>

  )
}

export default Card