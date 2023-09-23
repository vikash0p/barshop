import Image from 'next/image';
import React from 'react'


const page = async () => {
    const response = await fetch('https://api.punkapi.com/v2/beers');
    const data = await response.json();
    console.log(data);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {
                    data.map((value,index,arrray)=>{
                        return(
                            <div key={value.id} className='border border-red-500 flex flex-col justify-center items-center' >
                                    <Image
                                    src={value.image_url}
                                    alt={value.name}
                                    className='w-64 h-64 object-contain'
                                    width={300}
                                    height={300}
                                     />
                                     <h3>{value.tagline} </h3>
                            </div>
                        )
                    })
                }
        </div>
    )
}

export default page
