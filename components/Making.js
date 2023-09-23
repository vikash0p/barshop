
import { mak } from '@/data'
import Image from 'next/image'
import React from 'react'

const Making = () => {
  return (
    <div className='w-full min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-0 py-3  '>
      {
        mak.map((value,index)=>{
            return(
                <div key={index} className='flex flex-col md:flex-row lg:first:items-start lg:last:items-end  justify-center  items-center  text-white '>
                  <div className='flex flex-col items-center  md:items-start'>
                  <Image src={value.img} alt={value.title} className='object-cover backgroundImage  border-2 border-yellow' width={250} height={250} />
                  <h2 className='text- font-semibold'>{value.title} </h2>
                  <p className='w-44'>{value.para} </p>
                  </div>
                    
                </div>
            )
        })
      }
    </div>
  )
}

export default Making
