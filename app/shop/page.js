"use client"
import Image from "next/image";
import Link from "next/link";
import CenterText from "@/Reausable/CenterText";
import Topbar from "@/Reausable/Topbar";
import axios from 'axios'
import Cart from "@/components/Cart";
import { useQuery } from "react-query";
import { toast } from 'react-toastify';

const fetchUsers = async () => {
    const response = await axios.get('https://api.punkapi.com/v2/beers');
    return response.data;
};

const ShopData = () => {
    const { data, error, isLoading } = useQuery('users', fetchUsers);


    if (isLoading) {
        return <>
        <h1>loading...</h1>
        </>
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <>

            <Topbar >
                <CenterText title='products' tilte1='Home / Products' />
            </Topbar>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4'>
                {
                    data.map((value) => {
                        return (
                            <div className='bg-black  space-y-5 text-center  py-6   text-white' key={value.id}>
                                <Image
                                    src={value.image_url}
                                    alt={value.name}
                                    className='w-64 h-64 object-contain mx-auto'
                                    width={300}
                                    height={300}
                                />
                                <div className="space-y-3">
                                    <h3 className="text-xl">{value.tagline} </h3>
                                    <div className="flex flex-row justify-between mt-2 px-2">
                                        <Link href={`/shop/${value.id}`} className="bg-yellow px-5 py-2 rounded-lg ">View Product </Link>
                                        <Cart id={value} />
                                    </div>

                                </div>
                            </div>

                        )
                    })
                }
            </div>


        </>
    )
}

export default ShopData
