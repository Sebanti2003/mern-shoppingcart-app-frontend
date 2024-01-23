import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {deposite} from '../slices/Accountslice';
const YourAccount = () => {
  const [depo,setdeposit]=useState(0);
    const customer=useSelector(store=>store.customer);
    const account=useSelector(store=>store.account);
    console.log(account);
    const dispatch=useDispatch();
// }
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
        <div className='flex flex-col gap-4 p-2 justify-center items-center'>
            <div className='font-bold text-lg'>Welcome to <span className='text-violet-500'>React Bank</span><span className='mx-4'>{customer.fullName}</span></div>
            <div>Account Nation Id: <span className="text-blue-500">{customer.nationalID}</span></div>
            <div className="text-black font-semibold">Account details :</div>

              <li>Account Balance: ${account.balance}</li>
              <div>
                <div>Amount you want to deposite</div>
                <input type="number" name="amount" className='border-2 border-black' id="amount" value={depo} onChange={(e)=>setdeposit(+e.currentTarget.value)} />
              </div>
              <button onClick={()=>dispatch(deposite(depo))} className='p-1 bg-red-300 border-2 border-black'>Deposit</button>

        </div>
    </div>
  )
}

export default YourAccount
