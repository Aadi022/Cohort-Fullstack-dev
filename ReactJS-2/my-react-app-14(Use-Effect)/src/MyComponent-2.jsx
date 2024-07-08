import React, {useState, useEffect} from 'react'

function MyComponent2(){

    const [width, setWidth]= useState(window.innerWidth);  //This is how we get the width and height of the window
    const [height, setHeight]= useState(window.innerHeight);

    useEffect(()=>{
        window.addEventListener("resize",handleResize);
        console.log("Event Listener added")
    },[]);  //No dependency as the component itself is window size changing



    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    return(
        <>
        <p>Window width: {width}px</p>
        <p>Window height: {height}px</p>
        </>
    )
}

export default MyComponent2