
"use client"
import Image from 'next/image'
import React, { useState,useEffect } from 'react'


import { RxHamburgerMenu } from 'react-icons/rx'
import { LiaShoppingBagSolid } from 'react-icons/lia'
import { AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [scrollActive, setScrollActive] = useState(false);


    const toggleSidebar = () => {
        setIsOpen(!isOpen);

    };
    useEffect(() => {

        window.addEventListener("scroll", () => { setScrollActive(window.scrollY > 50); });

    }, []);


    return (
        <>
            <nav className={'w-full fixed top-0 left-0 right-0 z-50 flex flex-row items-center justify-around px-3 lg:px-0' + (scrollActive ? ' bg-[#27211d] shadow pt-0' : '')}>
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
                <div>
                    <LiaShoppingBagSolid size={25} className='text-white' />
                </div>
            </nav>

            <div className={`fixed top-0 left-0 bg-gray-800 z-50 bg-black text-white w-72 min-h-screen p-4 ${isOpen ? 'translate-x-0' : '-translate-x-72'} transform transition-transform duration-300 ease-in-out`}>
                {
                    isOpen && <AiOutlineClose size={30} className='absolute top-0 text-white bg-black cursor-pointer left-72' onClick={toggleSidebar} />

                }
                <div className="mb-4 text-2xl font-semibold">
                    Sidebar
                    <button
                        className="p-2 ml-2 rounded-lg hover:bg-gray-600"
                        onClick={toggleSidebar}
                    >
                        {isOpen ? 'Close' : 'Open'}
                    </button>
                </div>
                <ul>
                    <li className="mb-2">
                        <a href="#" className="hover:text-blue-500">
                            Home
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="#" className="hover:text-blue-500">
                            About
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="#" className="hover:text-blue-500">
                            Services
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="#" className="hover:text-blue-500">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </>

    )
}

export default Navbar
