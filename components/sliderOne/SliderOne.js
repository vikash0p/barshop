"use client";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';

export default function SliderOne() {
    return (
        <>
            <div className='h-36 w-full flex flex-col gap-3 mt-8  items-center'>
                <p className='text-white'>Testimonial</p>
                <h1 className="uppercase text-center text-5xl lg:text-8xl text-yellow font-semibold">Clients Speaks</h1>

            </div>

            <Swiper navigation={true} modules={[Navigation]} className=" max-w-6xl lg:h-96 h-[550px] ">
                <SwiperSlide className=''>
                    <div className='w-[80%] mx-auto h-full flex flex-col lg:flex-row place-items-center gap-6'>
                        <Image src="/home/home-test-1_large.jpg" alt="images" width={300} height={300} />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id facilis minima necessitatibus, repellat molestiae ad asperiores sit blanditiis recusandae cumque quis sed ex neque, deleniti natus, hic qui voluptate. Corporis placeat amet reprehenderit provident accusamus quam hic laboriosam excepturi deleniti quaerat, iusto sequi? Quisquam possimus ipsam nisi similique odit eaque consequuntur in, sit ut voluptatem at atque officiis a. Ea?</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <div className='w-[80%] mx-auto h-full flex flex-row place-items-center gap-6'>
                        <Image src="/home/home-test-1_large.jpg" alt="images" width={300} height={300} />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id facilis minima necessitatibus, repellat molestiae ad asperiores sit blanditiis recusandae cumque quis sed ex neque, deleniti natus, hic qui voluptate. Corporis placeat amet reprehenderit provident accusamus quam hic laboriosam excepturi deleniti quaerat, iusto sequi? Quisquam possimus ipsam nisi similique odit eaque consequuntur in, sit ut voluptatem at atque officiis a. Ea?</p>
                    </div>
                </SwiperSlide>


                <SwiperSlide className=''>
                    <div className='w-[80%] mx-auto h-full flex flex-row place-items-center gap-6'>
                        <Image src="/home/home-test-1_large.jpg" alt="images" width={300} height={300} />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id facilis minima necessitatibus, repellat molestiae ad asperiores sit blanditiis recusandae cumque quis sed ex neque, deleniti natus, hic qui voluptate. Corporis placeat amet reprehenderit provident accusamus quam hic laboriosam excepturi deleniti quaerat, iusto sequi? Quisquam possimus ipsam nisi similique odit eaque consequuntur in, sit ut voluptatem at atque officiis a. Ea?</p>
                    </div>
                </SwiperSlide>


               
               
               
               
               
               
               
               
            </Swiper>
        </>
    );
}
