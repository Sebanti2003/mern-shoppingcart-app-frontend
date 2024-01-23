import {configureStore} from '@reduxjs/toolkit'
import reducercustomer from "./slices/Customerslice";
import accreducer from "./slices/Accountslice";
import Shoppingreducer from './slices/Shoppingcart.js'
import darkmodereducer from './slices/Darkmodeslice.js'
const store=configureStore({
  reducer:{
    account:accreducer,
    customer:reducercustomer,
    shoppingcart:Shoppingreducer,
    darkmode:darkmodereducer
  }
})
export default store;
   






























































// import {createStore,combineReducers} from'redux';
// export const Store=()=>{
//   const initialobject={
//     fullName:"",
//     Surname:"",
//     Money:0,
//     loan:0,
//     Loanstatement:"",
//     requestedloan:false
//   }
//   const customerreducer=(state=initialobject,action)=>{
//     switch (action.type) {
//       case "account/createname":
//         return {...state,fullName:action.payload.fullName,Surname:action.payload.Surname};
//       case "account/deposit":
//         return {...state,Money:action.payload.Money}
//       case "account/takeloan":
//         return {...state,loan:action.payload.loan,requestedloan:true,Loanstatement:action.payload.Loanstatement}
//       case "account/paidloan":
//         return {...state,Money:action.payload.Money-action.payload.loan,loan:0,Loanstatement:"",requestedloan:false}
//       default:
//         return state;
//     }
//   }
//   const store=createStore(customerreducer);
  
//   //action creators
  
//   const deposit=(amount)=>{
//     return {type:"account/deposit",payload:{Money:amount}}
//   }
  
  
  
  
//   store.dispatch(deposit(7800))
//   console.log(store.getState());
// }
