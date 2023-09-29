import CenterText from '@/Reausable/CenterText'
import Topbar from '@/Reausable/Topbar'
import { Client } from '@/components'
import Chillbar from '@/components/Chillbar'
import ClinetSection from '@/components/ClinetSection'
import HeroStaff from '@/components/HeroStaff'
import Testimonials from '@/components/Testimonials'
import Image from 'next/image'
import React from 'react'


const About = () => {
  return (
    <div>
      <Topbar >
        <CenterText title='About' tilte1='Home / about' />
      </Topbar>
      <div className='w-full min-h-[100vh] bg-white text-black py-16 '>
        <div className=' container h-[70%] mx-auto flex flex-row gap-10 '>
          <div className='basis-[70%] '>
            <Image src={'/about/abou-1.jpg'} alt='cheifImage' width={500} height={500} className='w-full h-[100%] object-cover border-8 border-black ' />
          </div>
          <div className='basis-[30%] '>
            <div className='flex flex-col gap-8 w-full h-full'>
              <Image src={'/about/abou-2.jpg'} alt='cheifImage' width={500} height={500} className='w-full h-[100%] object-cover border-8 border-black ' />
              <Image src={'/about/abou-3.jpg'} alt='cheifImage' width={500} height={500} className='w-full h-[100%] object-cover border-8 border-black ' />

            </div>
          </div>
        </div>
        <div className='container mx-auto flex flex-col gap-7 justify-center items-center  mt-10'>
          <h1 className='text-center '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel praesentium tempora fugiat. Amet, eaque perferendis? Ad aperiam nemo quis nihil, quibusdam amet qui autem! Perferendis ullam reiciendis nihil eos, reprehenderit vel voluptatum neque ipsam, deserunt hic incidunt maiores totam nesciunt facilis iure voluptas? Optio suscipit unde blanditiis in incidunt officia voluptatibus provident consectetur, veniam ex molestiae aliquam nihil voluptatem quod!</h1>
          <button type="button" className='w-48 h-12 bg-yellow text-white font-bold text-2xl'>Read More</button>
        </div>

      </div>
      <HeroStaff />
      <Chillbar />
      <Testimonials />
      <Client />
    </div>
  )
}

export default About
