import { storyData } from '@/data'
import Image from 'next/image'
import React from 'react'


const Story = () => {
    console.log(storyData);
    return (
        <div className=' container mx-auto w-full min-h-screen grid grid-cols-1 lg:grid-cols-3 mt-20'>
            <div className="px-14 text-center space-y-4">
                <h1 className='text-5xl lg:text-7xl text-yellow font-semibold'>Our  stories</h1>
                <p>Fusce ullamcorper pulvinar enim, ac elementum justo vulputate non. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus et erat diam. Pellentesque nec elit dictum, auctor ipsum in, vulputate.</p>
            </div>
            <div className="col-span-2 mt-6  ">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
                    {
                        storyData.map((value, index, array) => {
                            return (

                                <div class="max-w-sm mx-auto bg-white text-black " key={index}>
                                    <Image 
                                    src={value.img}
                                     alt={value.name}
                                     className='w-full h-40 object-cover'
                                     sizes='w-full'
                                     width={500}
                                     height={500}
                                       />
                                
                                    <div class="p-5">
                                        
                                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                       
                                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                        <p className='mb-3'>{value.data} </p>
                                        <p className='mb-3'>{value.name}</p>
                                        <button type='button' class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-yellow rounded-lg hover:bg-yellow focus:ring-4 focus:outline-none focus:ring-yellow dark:bg-yellow dark:hover:bg-yellow dark:focus:ring-yellow">
                                            Read more
                                            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                            )
                        })
                    }

                </div>
            </div>

        </div>
    )
}

export default Story
