import React from 'react';
import DirectionButton from './PageLineComp/DirectionButton';
import Hr from './PageLineComp/Hr';
import backArrow from './TopCompAssets/backArrow.svg'

const PageLine = ({ pageName, updatePageNum }) => {

  const handleBackButtonClick = () => {
    updatePageNum((prevPageNum) => Math.max(prevPageNum - 1, 1));
  };


  return (
    <div className='mt-10'>
      <div className='flex justify-center'>
        <button className="rotate-180" onClick={handleBackButtonClick}><img className="hover:opacity-50" src={backArrow} alt='Go back' /></button>
        <h1 className='px-3 font-bold text-2xl'>{pageName}</h1>
        <button className='cursor-default opacity-0'><img src={backArrow} alt='Go next' /></button>
      </div>
      <div className='flex w-full mt-8 justify-center items-center'>
        <DirectionButton pageNumber={1} updatePageNum={updatePageNum} color="blackdefault" />
        <Hr color={pageName === "Checkout" ? "graydefault" : "blackdefault"} />
        <DirectionButton pageNumber={2} updatePageNum={updatePageNum} color={pageName === "Checkout" ? "graydefault" : "blackdefault"} />
        <Hr color={pageName === "Shipping" ? "blackdefault" : "graydefault"} />
        <DirectionButton pageNumber={3} updatePageNum={updatePageNum} color={pageName === "Shipping" ? "blackdefault" : "graydefault"} />
      </div>
    </div>
  )
}

export default PageLine
