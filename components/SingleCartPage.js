"use client"
import { remove } from '@/Redux-toolkit/CartSlice'
import Image from 'next/image'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const SingleCartPage = () => {
    const dispatch=useDispatch();
    const cartItems=useSelector((state)=>state.cart);
    console.log(cartItems)
    const handlerRemove= (id)=>{
        dispatch(remove(id))
    }
    return (
        <div>
                <h3 className='text-5xl w-full text-center'>Cart Page</h3>
                {
                    cartItems.map((value,index,array)=>{
                        return(
                            <div key={value.id} className='flex flex-row justify-between  container mx-auto  items-center py-10 gap-4 '>
                                <Image
                                    src={value.image_url}
                                    alt={value.name}
                                    className='w-20 h-20 object-contain '
                                    width={50}
                                    height={50}
                                />
                                <h3 className="text-xl">{value.tagline} </h3>
                                <h3>1000</h3>
                                <button type="button" className='px-6 py-2 bg-yellow' onClick={()=>handlerRemove(value.id)}>Remove</button>
                            </div>
                        )
                    })
                }
        </div>

    )
}

export default SingleCartPage
