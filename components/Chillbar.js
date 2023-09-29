import Image from 'next/image'
import React from 'react'
const Chillbar = () => {
    return (
        <div className='container mx-auto  py-16'>
            <div className='relative'>
                <Image src={'/about/abou-5.jpg'} alt='cheifImage' width={500} height={400} className='w-[607px] h-[354px] object-cover  ' />
                <div className='w-[430px] h-[230px] bg-yellow p-10 space-y-4 absolute   top-16 right-80 hidden lg:block '>
                    <h5 className='text-lg'>Cras sagittis sapien tellus, id lacinia nunc suscipit vitae. Integer eget lectus et diam lobortis laoreet etrimum soem vitae id nunc. Pellentesque a rutrum felis.</h5>
                    <h4 className='text-lg text-black'>Crafted for Party Fun...</h4>
                </div>
            </div>
            <div className='flex flex-row-reverse'>
                <div className='relative mt-16 '>
                    <Image src={'/about/abou-5.jpg'} alt='cheifImage' width={500} height={400} className='w-[607px] h-[354px] object-cover  ' />
                    <div className='w-[430px] h-[230px] bg-yellow p-10 space-y-4 absolute   top-16 -left-80 hidden lg:block '>
                        <h5 className='text-lg'>Cras sagittis sapien tellus, id lacinia nunc suscipit vitae. Integer eget lectus et diam lobortis laoreet etrimum soem vitae id nunc. Pellentesque a rutrum felis.</h5>
                        <h4 className='text-lg text-black'>Crafted for Party Fun...</h4>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Chillbar
