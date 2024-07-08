//Updating objects in state
import React, {useState} from 'react'

function MyComponent(){

    const [car,setCar]= useState({year:2024,        //Here we are initializing the variable car with json value
                                  make:"Ford", 
                                  model:"Mustang"})

    
    const handleYearChange= function(event){  //We are making use of updater functions. So basically c is car.
        setCar(c=>({...c, year: event.target.value}));   //...c is the spread function. This is how we update a part of json value. If we update directly, then only year:2025 will be there in the output. ...c is basically {year:2024, make:"Ford", model: "Mustang", year: event.target.value}, but javascript tends to avoid repetition by taking the last value, hence the last year is taken into consideration
    }

    const handleMakeChange= function(event){
        setCar(c=>({...c, make: event.target.value}));
    }

    const handleModelChange= function(event){
        setCar(c=>({...c, model: event.target.value}));
    }

    return(  //remember- when there is an input box, there is a value and an onChange-> which leads to defining of a setter function
        <>
        <div>
            <p>Your favourite car is: {car.year} {car.make} {car.model}</p>
            <input type="number" value={car.year} onChange={handleYearChange}></input> <br/>
            <input type="text" value={car.make} onChange={handleMakeChange}></input><br/>
            <input type="text" value={car.model} onChange={handleModelChange}></input><br/>
        </div>
        </>
    )
}

export default MyComponent