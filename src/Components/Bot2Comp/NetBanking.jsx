import React from 'react'

const NetBanking = () => {
  return (
    <div className='mt-10 flex justify-start flex-col'>
      <div className='flex items-center'>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.33337 11.3333V6.66667H4.66671V11.3333H3.33337ZM7.33337 11.3333V6.66667H8.66671V11.3333H7.33337ZM1.33337 14V12.6667H14.6667V14H1.33337ZM11.3334 11.3333V6.66667H12.6667V11.3333H11.3334ZM1.33337 5.33333V4L8.00004 0.666668L14.6667 4V5.33333H1.33337ZM4.30004 4H11.7L8.00004 2.16667L4.30004 4Z" fill="black"/>
        </svg>
        <span className='pl-1.5 text-base font-medium'>Net Banking</span>
      </div>
      <button className='underline hover:opacity-50 w-fit text-start text-xs font-light'>
        Link your bank account
      </button>      
    </div>
  )
}

export default NetBanking
