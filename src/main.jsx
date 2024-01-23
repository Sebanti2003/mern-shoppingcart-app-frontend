import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'
import store from './store.js'
import Appp from './Appp.jsx'
import Shopping from './Shopping.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './components/Cart.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Shopping/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
  
)
