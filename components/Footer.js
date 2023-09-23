import Image from 'next/image'
import React from 'react'
import { BiLogoFacebookCircle, BiLogoInstagramAlt, BiLogoTwitter } from 'react-icons/bi'
const Footer = () => {
    return (
        <footer className='flex flex-col place-items-center w-full h-[550px] gap-10 mt-9'>
            <Image src={'/home/logo.png'} alt='LogoImage' width={130} height={152} />
            <div>
                <ul className='flex flex-col md:flex-row gap-3'>
                    <li>Terms & conditions</li>
                    <li>Privacy Policy</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Consumer Information</li>
                </ul>
            </div>
            <div>
                <ul className='flex flex-row gap-3'>
                    <li>
                        <BiLogoFacebookCircle size={20} />
                    </li>
                    <li>
                        <BiLogoInstagramAlt size={20} />
                    </li>
                    <li>
                        <BiLogoTwitter size={20} />
                    </li>
                </ul>
            </div>
            <h3 className='text-center'>Copyright by Design Themes. All rights reserved.</h3>


        </footer>
    )
}

export default Footer
