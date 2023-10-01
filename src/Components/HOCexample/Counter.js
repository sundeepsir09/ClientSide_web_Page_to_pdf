import React,{useState} from "react";



const Counter = () =>{
    const [count , setCount]= useState(0)


    return(
        <div>
            <h3>Counter compo</h3>
            <h2>{count}</h2>
            <button  onClick={()=>setCount(count+1)} >Count</button>
        </div>
    )
}
export default Counter