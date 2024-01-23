import React from 'react'
import Onecom from './Onecom';

const One = () => {
    let pizzaData = [
        {
          name: "Focaccia",
          ingredients: "Bread with italian olive oil and rosemary",
          price: 6,
          photoName: "pizzas/focaccia.jpg",
          soldOut: false,
        },
        {
          name: "Pizza Margherita",
          ingredients: "Tomato and mozarella",
          price: 10,
          photoName: "pizzas/margherita.jpg",
          soldOut: false,
        },
        {
          name: "Pizza Spinaci",
          ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
          price: 12,
          photoName: "pizzas/spinaci.jpg",
          soldOut: false,
        },
        {
          name: "Pizza Funghi",
          ingredients: "Tomato, mozarella, mushrooms, and onion",
          price: 12,
          photoName: "pizzas/funghi.jpg",
          soldOut: false,
        },
        {
          name: "Pizza Salamino",
          ingredients: "Tomato, mozarella, and pepperoni",
          price: 15,
          photoName: "pizzas/salamino.jpg",
          soldOut: true,
        },
        {
          name: "Pizza Prosciutto",
          ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
          price: 18,
          photoName: "pizzas/prosciutto.jpg",
          soldOut: false,
        },
      ];
  return (
    <div className='flex flex-col gap-2 items-center w-screen'>
        <div className='border-2 w-full border-black'>FAST_REACT_PIZZA_CO.</div>
        <div>our menu</div>
        {pizzaData.length>0?<div className=' grid lg:grid-cols-3 md:grid-cols-2 sm:grid-col-1 gap-2'>
        {pizzaData.map((e)=>(
           <Onecom key={e.name} {...e}/>
        ))}
        </div>:<div>No order till now <button className='p-1 bg-yellow-500 text-black border-[1px] border-black'>Order Now</button></div>}
        
        
      
    </div>
  )
}

export default One
