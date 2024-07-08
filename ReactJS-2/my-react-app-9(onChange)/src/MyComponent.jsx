import React, {useState} from 'react'

function MyComponent(){
    const [name,setName]= useState("Guest");
    const [quantity, setQuantity]= useState(1);
    const [comment, setComment]= useState("");
    const [payment, setPayment]= useState("");
    const [shipping, setShpping]= useState("");

    function handleNameChange(event){ //This wiil be called in onChange. This is what will happen when a text is entered in the input
        //event.target assigns the html element where it is called, and event.target.value gives the value of that html element
        setName(event.target.value);  //This is how we access the value from the input box and assign it to the 'name' variable.
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }

    function handleCommentChange(event){
        setComment(event.target.value);
    }

    function handlePaymentChange(event){
        setPayment(event.target.value);
    }

    function handleShippingChange(event){
        setShpping(event.target.value);
    }

    return(
        /*
        The value attribute in each input element is used to bind the state variables to the corresponding input fields. 
        This ensures that the input elements reflect the current state and are kept in sync with it.
        Value can also be any dynamic element that can keep changing in teh return tags.
        The value attribute in an input element determines what will be assigned to the state variable when the input changes.
        */
        <>
        <div>
            <input type="text" value={name} onChange={handleNameChange}/>
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantityChange} type="number"/>
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange} placeholder="Enter delivery instructions"/>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>  
                <option value="">Select an option</option>     
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Giftcard">Giftcard</option>
            </select>
            <p>Payment: {payment}</p>

            <label>
            <input type="radio" value="Pick Up"
                    checked={shipping==="Pick Up"}
                    onChange={handleShippingChange}/>
                Pick Up
            </label>
            
            <label> 
            <input type="radio" value="Delivery"
                    checked={shipping==="Delivery"}
                    onChange={handleShippingChange}/>
                Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </div>
        </>
    )
    //define value for each html element, and then play with value only, not with the state variable.
    //So for user inputs, you always have to define the type, the value and the onChange in the HTML element.
}

export default MyComponent