import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  balance: 0,
  loan: 0,
  loanpurpose: "",
};
/*export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "account/requestloan":
      if (state.loan > 0) {
        return state;
      }
      return {
        ...state,
        loan: action.payload.amount,
        loanpurpose: action.payload.statement,
      };
    case "account/payloan":
      return {
        ...state,
        loan: 0,
        loanpurpose: "",
        balance: state.balance - state.loan,
      };
    default:
      return state;
  }
}
export function deposit(amount) {
  return { type: "account/deposit", payload: amount };
}
export function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}
export function payloan() {
  return { type: "account/payloan" };
}
export function requestloan(amount, statement) {
  return {
    type: "account/requestloan",
    payload: { amount: amount, statement: statement },
  };
}
*/
const accountslice=createSlice({
  name:"account",
  initialState,
  reducers:{
    deposite(state,action){
      state.balance=state.balance+action.payload;
    },
    withdraw(state,action){
      state.balance-=action.payload
    },
    requestloan:{
      prepare(amount,statement){
        return {
          payload:{amount,statement}
        }
      },
      reducer(state,action){
        if(state.loan>0) return;
        state.loan=action.payload.amount;
        state.loanpurpose=action.payload.statement;
        state.balance=state.balance+state.loan;
      }
     
    },
    payloan(state,action){
      state.loan=0;
      state.balance-=state.loan;
      state.loanpurpose=""
    }
  }
});
export const {deposite,withdraw,requestloan,payloan}=accountslice.actions;
export default accountslice.reducer;
