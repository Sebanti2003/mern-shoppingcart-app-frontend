import Createaccount from './components/Createaccount';
import YourAccount from './components/YourAccount';
import { useSelector,useDispatch } from 'react-redux';
import store from './store';
const Appp = () => {
  const dispatch=useDispatch();
  const customer=useSelector(store=>store.customer);
  const account=useSelector(store=>store.account);
  if(customer.fullName){
    return <YourAccount/>
  }
  return <Createaccount/>
}


export default Appp
