import React from 'react'

const CenterText = ({ title, tilte1 }) => {
  return (
    <div className='flex flex-col gap-4 justify-center items-center w-full h-full'>
      <h1 className='text-4xl uppercase'>{title}</h1>
          <h3 className='text-xl'>{tilte1}</h3>
    </div>
  )
}

export default CenterText
