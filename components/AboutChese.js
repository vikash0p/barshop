import Image from 'next/image'
import React from 'react'


const AboutChese = () => {
  return (
    <div className='mt-6 lg:mt-0 px-1 lg:px-3'>
      <div className='h-44 w-full flex flex-col gap-3  items-center'>
        <p className='text-white'>Who we are </p>
        <h1 className="uppercase text-center text-5xl lg:text-8xl text-yellow font-semibold">About cheers</h1>

      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10  ">
        <div className="px-4 flex flex-col gap-20 border-r-2 border-e-gray">
          <div className=" lg:flex gap-4">
            <Image src={'https://cheerx-beer.myshopify.com/cdn/shop/files/icon-4_grande_d1e385e6-f177-4ead-b96b-d8f3acf2f48d_grande.png?v=1613794577'} alt='images' width={256} height={166} />
            <div className="space-y-4">
              <h2 className='text-4xl font-semibold'>Lorem, ipsum.</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, temporibus est. Eos rem amet in qui ipsa impedit temporibus delectus, quos deserunt obcaecati, assumenda laborum modi ratione, nobis perferendis dicta.</p>
            </div>
          </div>
          <div className="">
            <div className="lg:flex gap-4">
              <Image src={'https://cheerx-beer.myshopify.com/cdn/shop/files/icon-6_grande_c37860e3-e5f4-4b01-9d6b-8cd002c0e6fa_grande.png?v=1613794577'} alt='images' width={256} height={166} />
              <div className='space-y-4'>
                <h2 className='text-4xl font-semibold' >Lorem, ipsum.</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, temporibus est. Eos rem amet in qui ipsa impedit temporibus delectus, quos deserunt obcaecati, assumenda laborum modi ratione, nobis perferendis dicta.</p>

              </div>
            </div>

          </div>
        </div>
        <div className="">
          <div className='w-64 space-y-3 px-3 md:px-0 mt-12 md:mt-0'>
            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi corrupti aut illum veniam ab possimus omnis, voluptates temporibus enim cum!</h3>
            <h1 className='text-2xl font-bold'>Lorem, ipsum.</h1>
            <p className='text-lg'>Co-founder</p>
          </div>
          <div>
            <Image src={'https://cheerx-beer.myshopify.com/cdn/shop/files/icon-7_grande_6651670c-8a02-428b-85a7-5c5e1e24e438_grande.png?v=1613794578'} alt='images' width={528} height={464} />


          </div>
        </div>
      </div>

    </div>
  )
}

export default AboutChese
