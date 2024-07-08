import React,{useState} from 'react'

function MyComponent(){

    const [num1, setNum1]= useState();  //Defining state variable for the number in first input box
    const [num2, setNum2]= useState();  //Defining state variable for the number in second input box
    const [ans, setAns]= useState();    //Defining state variable for the ans

    const handlenum1= function(event){  //setter function for num1(re-rendering)
        setNum1(event.target.value);
    }

    const handlenum2= function(event){  //setter function for num2(re-rendering)
        setNum2(event.target.value);
    }
  
    const addition= function(){  //addition function
        const temp1= parseInt(num1);  
        const temp2= parseInt(num2);
        setAns(temp1+temp2);   //The change occurs in the ans variable, hence we re-render the ans variable to temp1+temp2
    }

    const subtraction= function(){  //subtraction function
        const temp1= parseInt(num1);
        const temp2= parseInt(num2);
        setAns(temp1-temp2);
    }

    const multiplication= function(){  //multiplication function
        const temp1= parseInt(num1);
        const temp2= parseInt(num2);
        setAns(temp1*temp2);
    }

    const division= function(){  //division function
        const temp1= parseFloat(num1);
        const temp2= parseFloat(num2);
        setAns(temp1/temp2);
    }

    return(  //Always remember- Jaha input-> waha value and onchange-> onchange mein define setter function
        <>
        <div>
            <input placeholder="Enter first number" value={num1} onChange={handlenum1}></input><br/>  
            <input placeholder="Enter second number" value={num2} onChange={handlenum2}></input><br/>
            <p>Ans: {ans}</p>
        </div>
        <div>
            <button onClick={addition}>Addition</button>
            <button onClick={subtraction}>Subtraction</button>
            <button onClick={multiplication}>Multiplication</button>
            <button onClick={division}>Division</button>
        </div>
        </>
    )
}

export default MyComponent