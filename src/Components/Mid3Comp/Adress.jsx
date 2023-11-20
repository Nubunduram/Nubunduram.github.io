import React from 'react'

const Adress = () => {
  return (
    <div className='w-screen'>
      <div className='flex ml-10 mr-16'>
        <svg className="mr-2 mt-1 w-4 h-4" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.99999 8.66666H7.33332V6.83333H8.66666V8.66666H9.99999V5.49999L7.99999 4.16666L5.99999 5.49999V8.66666ZM7.99999 12.9C9.35555 11.6556 10.3611 10.525 11.0167 9.50833C11.6722 8.49166 12 7.58888 12 6.79999C12 5.58888 11.6139 4.59722 10.8417 3.82499C10.0694 3.05277 9.12221 2.66666 7.99999 2.66666C6.87777 2.66666 5.93055 3.05277 5.15832 3.82499C4.3861 4.59722 3.99999 5.58888 3.99999 6.79999C3.99999 7.58888 4.32777 8.49166 4.98332 9.50833C5.63888 10.525 6.64443 11.6556 7.99999 12.9ZM7.99999 14.6667C6.2111 13.1444 4.87499 11.7305 3.99166 10.425C3.10832 9.11944 2.66666 7.91111 2.66666 6.79999C2.66666 5.13333 3.20277 3.80555 4.27499 2.81666C5.34721 1.82777 6.58888 1.33333 7.99999 1.33333C9.4111 1.33333 10.6528 1.82777 11.725 2.81666C12.7972 3.80555 13.3333 5.13333 13.3333 6.79999C13.3333 7.91111 12.8917 9.11944 12.0083 10.425C11.125 11.7305 9.78888 13.1444 7.99999 14.6667Z" fill="#211E1E"/>
        </svg>
        <div>
          <h1 className='font-medium text-base'>Home delivery</h1>
          <p className='font-light text-xs text-graydefault'>11 Rue François 1er</p>
          <p className='font-light text-xs text-graydefault'>75009 Paris</p>
          <p className='font-light text-xs text-graydefault'>France</p>
          <button className='font-light text-xs underline hover:opacity-50'>Add Adress</button>
        </div>  
      </div>
    </div>
  )
}

export default Adress
