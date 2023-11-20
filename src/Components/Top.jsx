import React from 'react'
import Logo from './TopComp/Logo'
import PageLine from './TopComp/PageLine'
import Title from './TopComp/Title'

const Top = ( { pageTitle, pageName, updatePageNum } ) => {
  return (
    <div className='flex items-center flex-col'>
        <Logo />
        <PageLine pageName={pageName} updatePageNum={updatePageNum}/>
        <Title pageTitle={pageTitle}/>
    </div>
  )
}

export default Top
