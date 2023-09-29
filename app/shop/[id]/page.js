import Cart from '@/components/Cart';
import Image from 'next/image';
import React from 'react'

const ProdctId = async ({ params }) => {

    const res = await fetch(`https://api.punkapi.com/v2/beers/${params.id}`)
    const data = await res.json();
    console.log(data);

    return (
        <div className='min-h-[500px] container mx-auto mt-10 '>
            {
                data.map((value) => {
                    return (
                        <div key={value.id} className='w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-4 '>
                            <div className=' '>
                                <Image
                                    src={value.image_url}
                                    alt={value.name}
                                    sizes='100vw'
                                    priority
                                    className='object-contain w-96 h-96'
                                    width={500}
                                    height={500}
                                />
                            </div>
                            <div className='space-y-4'>
                                <h3 className='text-4xl'>{value.name} </h3>
                                <div>
                                    <h1 className='text-2xl'>{value.description} </h1>
                                    <h1 className='text-2xl'>{value.brewers_tips} </h1>

                                </div>
                                <h3 className='text-xl'>{value.tagline} </h3>
                                <div className=' '>
                                    <table classname="table-fixed border-separate border-spacing-4  w-full ">
                                        <tbody>
                                            <tr>
                                                <td>Price : </td>
                                                <td>10000</td>

                                            </tr>
                                            <tr>
                                                <td>Avilibilityn</td>
                                                <td>In Stocks</td>
                                            </tr>
                                            <tr>
                                                <td>Specialty : </td>
                                                <td>Alcolal free</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>


                                <Cart id={value.id} />

                            </div>


                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProdctId
