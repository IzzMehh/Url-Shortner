import React from 'react'

function Card({title,description,createdAt}) {
  return (
    <div class="bg-white rounded-lg shadow-lg overflow-hidden max-w-lg w-full">
        <div class="p-6">
            <h2 class="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
            <p class="text-gray-700 leading-tight mb-4">
                {description}
            </p>
            <div class="flex justify-between items-center">
                <span class="text-gray-600">{createdAt}</span>
            </div>
        </div>
    </div>

  )
}

export default Card