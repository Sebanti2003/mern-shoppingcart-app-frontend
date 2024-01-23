import React from 'react'

const Onecom = (element) => {
  return (
    <div className='w-full p-2 bg-blue-400 flex flex-col items-center font-bold' key={element.name}>
    <div>{element.name}</div>
    <div className=' w-24 h-24 bg-slate-500'><img src={element.photoName} alt="" /></div>
    <div>{element.price}</div>
    <div>{element.soldOut}</div>
    <div>{element.ingredients}</div>
</div>
  )
}

export default Onecom
