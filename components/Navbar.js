
"use client"
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

import { BiSearch, BiSolidUser } from 'react-icons/bi'
import { AiFillHeart } from 'react-icons/ai'
import { RxHamburgerMenu } from 'react-icons/rx'
import { LiaShoppingBagSolid } from 'react-icons/lia'
import { AiOutlineClose } from 'react-icons/ai'
import { usePathname } from 'next/navigation'
import { curr, links } from '@/data'
import Link from 'next/link'
import { useSelector } from 'react-redux'
const Navbar = () => {
    const items = useSelector((state) => state.cart)

    const [isOpen, setIsOpen] = useState(false);
    const [scrollActive, setScrollActive] = useState(false);

    const pathname = usePathname()
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
        

    };
    useEffect(() => {

        window.addEventListener("scroll", () => { setScrollActive(window.scrollY > 50); });

    }, []);
    return (
        <>
            <nav className={`w-full ${pathname == '/' ? ' fixed ' : ''}   top-0 left-0 right-0 z-50 flex flex-row items-center justify-around px-3 lg:px-0` + (scrollActive ? ' bg-[#27211d] shadow pt-0' : '')}>
                <div>
                    <RxHamburgerMenu size={24} className='text-white cursor-pointer' onClick={toggleSidebar} />
                </div>
                <div>
                    <Image
                        src={'/home/logo.png'}
                        alt='logo'
                        width={130}
                        height={152}
                    />
                </div>



                <Link href={'/cart'} type="button" className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white ">
                    <LiaShoppingBagSolid size={25} className='text-white' />

                    <span className="sr-only">Notifications</span>
                    <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-yellow border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">{items.length} </div>
                </Link>

            </nav>
            <div className={`fixed top-0 left-0 bg-gray-800 z-50 bg-black text-white w-80 min-h-screen  ${isOpen ? 'translate-x-0' : '-translate-x-80'} transform transition-transform duration-300 ease-in-out`}>
                {
                    isOpen && <AiOutlineClose size={30} className='absolute top-0 text-white bg-black cursor-pointer left-80' onClick={toggleSidebar} />
                }

                <div className="w-full text-white ">
                    <div className='w-full h-10 flex flex-row '>
                        <input type="text" name="" id="" className='bg-transparent w-full h-10 outline-none placeholder:text-white px-3  border-b-2 border-b-yellow' placeholder='Search ' />
                        <button type="button" className='bg-yellow px-4 '><BiSearch size={20} /> </button>
                    </div>
                    {
                        links.map((value, index) => {
                            return (
                                <Link key={value.id} href={value.link} className='flex py-3 ps-3 flex-col gap-5 text-xl border-b-2 border-yellow'>
                                    {value.name}
                                </Link>
                            )
                        })
                    }
                    <div className='flex flex-row items-center  gap-4 py-3 text-xl text-yellow cursor-pointer border-b-2 border-yellow'>
                        <div className='flex flex-row place-items-center gap-1'>
                            <AiFillHeart />
                            <p>Wishlist</p>
                        </div>
                        <div className='flex flex-row place-items-center gap-1'>
                            <BiSolidUser />
                            <Link href={'/login'}>Log In</Link>
                        </div>
                    </div>
                    <h1 className='text-2xl py-4'> Currency</h1>
                    <div className='grid grid-cols-2 place-items-center gap-4 '>
                        {
                            curr.map((value, index) => {
                                return (
                                    <div key={index} className='flex flex-row gap-1' >
                                        <Image src={value.img} alt='images' width={30} height={12} />
                                        <h5>{value.title} </h5>

                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>

    )
}

export default Navbar
