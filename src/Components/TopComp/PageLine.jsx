import React from 'react';
import DirectionButton from './PageLineComp/DirectionButton';
import Hr from './PageLineComp/Hr';
import backArrow from './TopCompAssets/backArrow.svg'

const PageLine = () => {

  const pageName = "Checkout";

  
  return (
    <div className='mt-10'>
      <div className='flex justify-center'>  
        <button className="rotate-180"><img className="hover:opacity-50" src={backArrow} alt='Go back' /></button>      
        <h1 className='px-3 font-bold text-2xl'>{pageName}</h1>
        <button><img className='opacity-0' src={backArrow} alt='Go next' /></button>
      </div>
      <div className='flex w-full mt-8 justify-center items-center'>
        <DirectionButton color={"blackdefault"} /><Hr color={"graydefault"}/><DirectionButton color={"graydefault"} /><Hr color={"graydefault"}/><DirectionButton color={"graydefault"}/>
      </div>
    </div>
  )
}

export default PageLine
