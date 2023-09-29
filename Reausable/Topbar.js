import Image from 'next/image'
import React from 'react'
import CenterText from './CenterText'


const Topbar = ({ children }) => {
  return (
    <div className='backgroundImages  '>
      {children}
    </div>
  )
}

export default Topbar
