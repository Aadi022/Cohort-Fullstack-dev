/*So basically useEffect has a function and a dependency. Whenever the dependency renders, the function automatically runs. But if no dependency is given,
then thhe function runs on rendering of the component. Even when the component gets initialized, the function runs.
*/

import React, {useState, useEffect} from 'react'
function MyComponent(){

    const [count,setCount]= useState(0);
    const [color, setColor]= useState("green");

    useEffect(()=>{
        document.title= `Count: ${count} ${color}` ;
    },[count, color]);  //When I am putting [count], I am telling react to run the function when the component is mounting and the value of state-count changes

    const addCount= function(){
        setCount(c=>c+1);
    }

    const subtractCount= function(){
        setCount(c=>c-1);
    }

    const changeColor= function(){
        setColor(c=>c==="green" ? "red" : "green")   //read it like-> Is the state variable 'color'===green, if yes then return red, else return green.
    }

    return(
        <>
        <p style={{color: color}}>Count: {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={subtractCount}>Subtract</button> <br/>
        <button onClick={changeColor}>Change Color</button>
        </>
    )
}

export default MyComponent