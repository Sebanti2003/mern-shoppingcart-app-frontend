import { useEffect, useState } from 'react'
import Jslessons from './components/Jslessons';

function App() {
  const [count, setCount] = useState(-1);
  const [advice,setadvice]=useState("");
  const getadvice=async()=>{
    try {
      const response=await fetch('https://api.adviceslip.com/advice');
      const data=await response.json();
      // console.log(data);
      setadvice(data.slip.advice);
      setCount((e)=>e+1)
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(()=>{
    getadvice();
  },[])
  return (
    <>
    <div className='w-screen h-screen  text-2xl font-mono font-bold grid place-items-center'>
      <h1>{advice}</h1>
      <button className='p-1 border-2 border-black bg-violet-400' onClick={getadvice}>get it</button>
      <div>{count}</div>
    </div>
    <Jslessons/>
    </>
  )
}

export default App