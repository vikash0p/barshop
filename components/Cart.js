"use client"
import { add, remove } from '@/Redux-toolkit/CartSlice'
import React from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify';


const Cart = ({id}) => {
    const dispatch=useDispatch( )

    const ClickHandler= (id) =>{
            dispatch(add(id))

      toast.success('your product is add Successfully!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  return (
    <div>
          <button type="button" className="bg-yellow px-5 py-2 rounded-lg " onClick={()=>ClickHandler(id)}>Add to Cart</button>

    </div>
  )
}

export default Cart
