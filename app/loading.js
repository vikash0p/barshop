"use client"

import Image from "next/image"


export default function Loading() {

    return (
        <div className="w-full h-screen flex flex-col justify-center items-center bg-transparent">
            <Image
            src={'/home/loading.gif'}
            alt="loaddingImage"
            width={50}
            height={50}
            className="object-cover bg-transparent"
             />
        </div>
    )
}