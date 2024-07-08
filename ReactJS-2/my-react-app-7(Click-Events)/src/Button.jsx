
function Button(){

    let count=0;
    /* 
    const handleClick= function(name){
        if(count<3){
            count++;
            console.log("You have clicked me",count,"times");
        }
        else{
            console.log(name,"stop clicking me");
        }
    }
    */

    const handleClick=function(e){   //e is the event object that's automatically passed to the event handler function. This event object contains information about the event, such as the target element that triggered the event, the type of event, and other properties and methods that describe the event.
        e.target.textContent="OUCH";  //e.target is the dom element that triggered the function, in this case is the button. textcontent is the text inside the target.
    }

    return(  //We wrap the handleClick function under an anonymous function(arrow function) because if we don't do this, javascript will automatically assume the first cllick in the console
        <>
        <button onClick={(e)=>handleClick(e)}>Click Me</button>   
        </>
    )
}

export default Button