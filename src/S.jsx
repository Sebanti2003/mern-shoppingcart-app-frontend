import React from 'react'
import {useDispatch, useSelector } from 'react-redux'
import store from './store'
const S = () => {
    const name=useSelector(store=>store.customer.fullName);
    
  return (
    <div>
      hi
      {name}
    </div>
  )
}

export default S
