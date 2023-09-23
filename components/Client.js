import { clientData } from '@/data'
import Image from 'next/image'
import React from 'react'

const Client = () => {
  return (
    <div className='container py-3 mx-auto border-y-2 border-y-gray place-items-center min-h-52 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-8 lg:0'>
      {
        clientData.map((value,index,array)=>{
            return(
                <div key={index}>
                     <Image src={value.img} alt='images' width={140} height={100} />       
                </div>
            )
        })
      }
    </div>
  )
}

export default Client
