import React, { useEffect, useState } from "react";

const Jslessons = () => {
  const books = { a: "hello", b: "world", c: ["bam", "dam", "ram"] };
  const { c } = books;
  const [bam, da] = c;
  const [...rest] = c;
//   console.log(rest);
//   console.log(bam, da);
const [s,ss]=useState([])
  const array = [3, 5, 6, 7, 1, 34, 12, 56];
  const sortedacc = array.slice(0).sort((a, b) => a - b);
  const sortdes = array.slice(0).sort((a, b) => b - a);
  const addition = array.reduce((acc, num) => acc + num, 0);
  const [array3, set] = useState([{ id: 2 }, { id: 6 }, { id: 9 }]);
  const deleted = (ide) => {
    set((e) => e.filter((b) => b.id != ide));
  };
  
  useEffect(()=>{
    async function gettodos(){
    const res=await fetch('https://jsonplaceholder.typicode.com/todos');
    const data=await res.json();
      ss(data);
    }
    gettodos();
  },[]) 
console.log(s);
  return (
    <div>
      {`The ascending order is : ${sortedacc}`}
      <br />
      {`the descending order is : ${sortdes}`}
      <br />
      {`The addition is : ${addition}`}
      <br />
      {array3.map((item) => {
        return (
            <div key={item.id}>
                <div>{item.id}</div>
                <button onClick={()=>deleted(item.id)} className="bg-violet-300 p-2 ">delete</button>
            </div>
        );
      })}
      <br />
    </div>
  );
};

export default Jslessons;
