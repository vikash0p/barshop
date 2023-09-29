import Image from 'next/image'
import React from 'react'

const HeroStaff = () => {
    return (
        <div className='w-full min-h-screen bg-yellow'>
            <div className=" container mx-auto h-full grid grid-cols-1 lg:grid-cols-2 ">
                <div className='space-y-7 px-1 lg:px-0 mt-20'>
                    <h1 className='text-5xl font-semibold uppercase text-center'>A beer of elegance</h1>
                    <p>Vestibulum ac finibus nulla. Praesent posuere, nibh a bibendum tincidunt, nulla lectus varius nisi, vel pulvinar magna lectus at turpis. Cras nibh augue, ultrices quis arcu nec, viverra hendrerit ipsum.</p>
                    <div className='space-y-16'>
                        <div className='space-y-4'>
                            <h3 className='text-xl'>Make your life cheerful</h3>
                            <p>Pellentesque posuere orci lobortis scelerisque blandit. Donec id tellus lacinia an, tincidunt risus ac, consequat velit.</p>

                        </div>
                        <div className='space-y-4'>
                            <h3 className='text-xl'>Make your life cheerful</h3>
                            <p>Pellentesque posuere orci lobortis scelerisque blandit. Donec id tellus lacinia an, tincidunt risus ac, consequat velit.</p>

                        </div>

                        <div className='space-y-4'>
                            <h3 className='text-xl'>Make your life cheerful</h3>
                            <p>Pellentesque posuere orci lobortis scelerisque blandit. Donec id tellus lacinia an, tincidunt risus ac, consequat velit.</p>

                        </div>

                    </div>
                </div>
                <div className='w-full h-full flex flex-col justify-center items-center'>
                    <Image src={'/about/abou-4.jpg'} alt='cheifImage' width={500} height={500} className='w-full h-[80%] object-contain ' />

                </div>
            </div>
        </div>
    )
}

export default HeroStaff
