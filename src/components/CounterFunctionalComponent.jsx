import { useState } from "react";

export default function CounterFunctionalComponent(){
    let [counter,setCounter] = useState(0);
    let [name,setName] = useState("Janmejaya");
    let fun = ()=>{
        console.log("------fun get called-----");
    }
   
    let increment = ()=>{
        setCounter(++counter);
    }
    let decrement = ()=>{
        setCounter(--counter);
    }
    const changeName = ()=>{
        setName("Javascript is Awesome!!!");
        console.log(name);
    }
  
    return (
        <>
        <h1>Name{name}</h1>
        <button className="btn btn-success" onClick={changeName}>Change Name!!</button>
        <h1>{counter}</h1>
        <button className="btn btn-warning" onClick={increment}>Increment</button>
        <button className="btn btn-info" onClick={decrement}>Decrement</button>
        </>
    )
};