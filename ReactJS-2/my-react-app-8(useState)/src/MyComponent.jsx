import React, {useState} from "react"

function MyComponent(){

    const [name,setName]= useState("Guest");   //We use array destructuring. name is the variable, and setName is the setter function used for re-rendering. Guest is the initial value in 'name'
    const [age, setAge]= useState(0);
    const [isEmployed, setIsEmployed]= useState(false);

    const updateName=function(){
        setName("Aadi");  //Remember all the dynamic stuff has its main part of re-rendering, and re-rendering is  ONLY AND ONLY DONE BY THE SETTER FUNCTION
    }

    const incrementAge= function(){
        setAge(age+1);
    }

    const toggleEmployedStatus=function(){
        setIsEmployed(!isEmployed);  //Basically when button presses, the boolean operator changes to the negation of the current bool val, so false will turn to true and true to false
    }

    return(
        <>
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>
            
            <p>Is employed: {isEmployed ? 'Yes' : 'No'}</p>
            <button onClick={toggleEmployedStatus}>Toggle Status</button>
        </div>
        </>
    )
}

export default MyComponent