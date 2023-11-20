import React from 'react'

const PromoCode = () => {
  return (
    <div className='flex items-center'>
      <div className='text-blackdefault flex hover:opacity-50 h-4  mr-3 border-b-2 border-blackdefault'>
          <svg xmlns="http://www.w3.org/2000/svg" 
          height="24" 
          viewBox="0 -960 960 960" 
          width="24"
          className='w-2 h-2 mt-1 -rotate-30'>
          <path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm0-160q17 0 28.5-11.5T520-480q0-17-11.5-28.5T480-520q-17 0-28.5 11.5T440-480q0 17 11.5 28.5T480-440Zm0-160q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm320 440H160q-33 0-56.5-23.5T80-240v-160q33 0 56.5-23.5T160-480q0-33-23.5-56.5T80-560v-160q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v160q-33 0-56.5 23.5T800-480q0 33 23.5 56.5T880-400v160q0 33-23.5 56.5T800-160Zm0-80v-102q-37-22-58.5-58.5T720-480q0-43 21.5-79.5T800-618v-102H160v102q37 22 58.5 58.5T240-480q0 43-21.5 79.5T160-342v102h640ZM480-480Z"/></svg>
          <a href=' ' className='pl-0.5 font-normal text-xs'>Promo Code</a>
      </div>
      <button className='bg-blackdefault h-5 w-12 rounded px-3 text-white font-normal text-2xs'>Apply</button>
    </div>
  )
}

export default PromoCode
