import React from 'react'
import NetBanking from './Bot2Comp/NetBanking';
import Pay from './Bot2Comp/Pay';
import NextPageButton from './BotComp/NextPageButton';

const Bot2 = ( { pageNum, updatePageNum }) => {
  
  return (
    <div className='flex flex-col mx-10'>
      <NetBanking />
      <Pay />
      <NextPageButton pageNum={pageNum} updatePageNum={updatePageNum}/>
    </div>
  )
}

export default Bot2
