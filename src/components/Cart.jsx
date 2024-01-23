import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {Link} from'react-router-dom'
import store from '../store';
import { BsBoxArrowInDownRight} from 'react-icons/bs';
import { MdOutlineDoneOutline } from "react-icons/md";
import { deleteitem } from '../slices/Shoppingcart';
const Cart = () => {
    const dispatch=useDispatch();
    const shoppingcart=useSelector(store=>store.shoppingcart);
    console.log(shoppingcart);
    const select=shoppingcart.selectedData;
    console.log(select);

  return (
    <div className='dark:bg-black w-screen min-h-screen flex flex-col items-center bg-blue-200'>
      <Link to={`/`}><button className='bg-green-400 p-2 m-2 rounded-lg border-2 border-red-600'>Go back</button></Link>
      <div className='flex max-md:flex-col justify-between items-center w-full px-10'>
      <div className='font-serif font-bold flex justify-between items-center'>
        <div className='dark:text-white'>Total Money to be paid : $</div>
        <div className='dark:text-white'>{shoppingcart.addtocartmoney}</div>
      </div>
      <div className='font-bold dark:text-white'>
        Total Orders: <span className='text-yellow-600 dark:text-blue-300'>{select.length}</span>
      </div>
      </div>
      
      <div className='w-screen p-2 flex flex-col gap-y-3'>
      {select.map((e,i)=>{
        return(
            <div className='w-[80%] max-md:w-[100%] dark:border-2 dark:border-white mx-auto flex min-h-36 bg-blue-500 border-2 border-black' key={i}>
                <div className='w-[30%]  bg-white'>
                    <img className="h-full w-[40%] mx-auto" src={e.image} alt="" />
                </div>
                <div className='w-[40%] ml-3'>
                    <div className='text-xl font-semibold mt-4'>{e.title}</div>
                    <div className='text-lg text-green-300 mt-5'>${e.price}</div>
                    <div className='text-white uppercase mt-4 flex items-center gap-2'>ORDERED <MdOutlineDoneOutline/></div>
                    <button onClick={()=>dispatch(deleteitem(e.id))} className='bg-red-500 p-1 rounded-lg'>Remove</button>
                </div>
            </div>
        )
      })}
      </div>
      
    </div>
  )
}

export default Cart
