import React, {useState} from 'react'

function ColorPicker(){

    const [color,setColor]=useState("#FFFFFF");

    const handlecolorChange= function(event){
        setColor(event.target.value);
    }

    /*So basically our state variable is color. We have set a <p> </p> wherein the background css
      is {color}. The Select Color is an input of type="color", wherein we can change the value,
      and the color keeps changing accordingly. Our onChange function keeps updating the 
      re-rendering the value in the input box.
    */
    return(  //if you want to explicitly add css in javascript, we use 'style'. We enclose it in double curly brackets, as the first one for using javascript element in return statement, and the second one for json brakcets
        <>
        <div className="color-picker-container">
            <h1>Color Picker</h1>
            <div className="color-display" style={{background: color}}>
                <p>Select Color: {color}</p>
            </div>
            <label>Select a Color: </label>
            <input type="color" value={color} onChange={handlecolorChange}/>
        </div>
        </>
    )
}

export default ColorPicker