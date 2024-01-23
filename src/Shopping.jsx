import { useSelector, useDispatch } from "react-redux";
import { shoppingfetch } from "./slices/Shoppingcart";
import { reset } from "./slices/Shoppingcart";
import { addelelement } from "./slices/Shoppingcart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {modechange} from "./slices/Darkmodeslice";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
const Shopping = () => {
  const addtocarttoast=()=>toast.success('Added to the cart!',{
    position:"bottom-left"
  });
  const darkmode=useSelector(store=>store.darkmode);
  const shoppingcart = useSelector((store) => store.shoppingcart);
  const load = shoppingcart.isLoading;
  const dispatch = useDispatch();
  const url = "/api/v1/getproducts";
  const datas=shoppingcart.data;


  
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}
  if(darkmode.mode==="light"){
    localStorage.theme="light"
  }
  if(darkmode.mode==="dark"){
    localStorage.theme="dark"
  }



  return (
    <>
    <div className="w-screen dark:bg-black py-5 flex justify-center items-center">
      {load?<div className="dark:text-white">Loading....</div>:<div className=" w-[95%] min-h-screen mx-auto dark:bg-black bg-red-400 p-2 flex flex-col gap-8 justify-center items-center">
        <div className={`flex w-full justify-between px-4 p-2 items-center max-md:flex-col max-md:gap-5 ${datas.length==0?"flex-col gap-3":""} `}>
        <button onClick={()=>dispatch(shoppingfetch(url))} className="bg-violet-500 px-10 rounded-lg dark:border-white dark:text-white border-2 border-black font-serif p-2">Click me</button>
        <button onClick={()=>dispatch(reset())} className="rounded-lg bg-green-500 px-10 border-2 dark:border-white dark:text-white  border-black font-serif  p-2">Reset</button>
        <button onClick={()=>dispatch(modechange())} className="bg-green-500 rounded-lg border-2 dark:border-white dark:text-white  border-black font-serif p-2">Mode change</button>
        {shoppingcart.selectedData.length>0?<Link to={`/cart`}><button className='bg-blue-500 rounded-lg border-2 border-slate-600 flex items-center justify-center p-2 relative'><BsCart4 className="w-5 h-5"/><div className="rounded-full p-1 absolute top-0 right-0 w-6 h-6 bg-white flex items-center justify-center text-xs font-bold">{shoppingcart.selectedData.length}</div><p>Go to Cart</p></button></Link>:null}
        </div>
        <div className="dark:text-white font-semibold font-serif">Total money left:$ {shoppingcart.Total} </div>
        {datas?<div className="w-full m-2 flex flex-wrap justify-center gap-2 items-center">
          {datas.map((e,i)=>{
            return <div className="" key={i}>
              <div className="max-sm:w-[100%] w-[400px] h-[600px] flex-col flex justify-center items-center p-3 bg-white border-2 border-black">
                <div className="w-[70%] mx-auto h-[30%]">
                  <img src={e.image} className="w-[60%] mx-auto h-full" alt="" />
                </div>
                <div className="font-bold mt-4 text-center  overflow-hidden h-fit">{e.title}</div>
                <div className="font-semibold my-4">{e.description.slice(0,200)}...</div>
                <div className="font-bold">${e.price}</div>
                <button onClick={()=>{dispatch(addelelement(e.id));addtocarttoast();}} className="bg-violet-500 border-2 border-black font-serif p-2 m-2">Add to Cart</button>
              </div>
            </div>
          })}
        </div>:""}
      </div>}
    </div>
    <ToastContainer position="bottom-left"/>
    </>
    
  );
}

export default Shopping;
