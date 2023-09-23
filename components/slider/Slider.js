"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide, } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'
import styles from './Slider.module.css'
import { BsSend } from 'react-icons/bs';
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import { sliderdata } from '@/data';
import Image from 'next/image';

export default function Slider() {

    return (
        <>

            <Swiper
                cssMode={true}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',

                }}
                speed={500}
                pagination={{
                    el: '.swiper-pagination',
                    clickable: true
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    waitForTransition: true,

                }}
                mousewheel={true}
                keyboard={true}
                swiper
                modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
                className="w-full h-screen mySwiper "
            >
                {
                    sliderdata.map((value, index, array) => {
                        return (
                            <SwiperSlide key={index} >
                                <Image
                                    src={value.img}
                                    alt={value.title1}
                                    className='absolute object-cover w-full h-screen'
                                    sizes='100vw'
                                    width={500}
                                    height={500}
                                />
                                <div className='relative top-52 left-[10%] text-white md:w-[450px]'>
                                    <div className='flex flex-col gap-5'>
                                        <h2 className=' text-4xl lg:text-5xl'>{value.title1} </h2>
                                        <h2 className='text-3xl'>{value.title2} </h2>
                                        <h2 className='text-xl'>{value.title3} </h2>
                                        <button type="button" className='py-3 text-2xl text-black bg-white px-7 w-[50%] lg:w-full '>Buy Now</button>
                                    </div>
                                  
                                </div>
                            </SwiperSlide>
                        )
                    })
                }



                <div className={`swiper-button-prev ${styles.buttonPrev}`}></div>
                <div className={`swiper-button-next ${styles.buttonNext}`}></div>
                <div className={`swiper-pagination ${styles.pagination}`}>

                </div>
            </Swiper >
        </>
    );
}
