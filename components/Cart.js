"use client"
import { add, remove } from '@/Redux-toolkit/CartSlice'
import React from 'react'
import { useDispatch } from 'react-redux'


const Cart = ({id}) => {
    const dispatch=useDispatch( )

    const ClickHandler= (id) =>{
            dispatch(add(id))
    }
  return (
    <div>
          <button type="button" className="bg-yellow px-5 py-2 rounded-lg " onClick={()=>ClickHandler(id)}>Add to Cart</button>

    </div>
  )
}

export default Cart
