import React, {useState, useEffect} from 'react'

function MyComponent(){
    const [val, setVal]= useState(null);

    useEffect(()=>{
        const fetchdata= async function(){
            try{
                const response= await fetch('api');
                const result= await response.json();
                setVal(result);
            }
            catch{
                console.log("Error in fetching the api");
            }
        }

        fetchdata();
        
    },[]);   //Adding empty dependency so that function runs only when the component is mounted

    return(
        <>
        <h1>{val.title}</h1>
        <h2>{val.body}</h2>
        </>
    )
}

export default MyComponent