import React from 'react'
import Logo from './TopComp/Logo'
import PageLine from './TopComp/PageLine'
import Title from './TopComp/Title'

const Top = () => {
  return (
    <div className='flex items-center flex-col'>
        <Logo />
        <PageLine />
        <Title />
    </div>
  )
}

export default Top
