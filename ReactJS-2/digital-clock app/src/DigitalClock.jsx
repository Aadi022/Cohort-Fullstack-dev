import React, {useState, useEffect} from 'react'

function DigitalClock(){

    const [time,setTime]= useState(new Date());

    useEffect(()=>{    //This means that in every 1000 seconds, new time will be generated
        const intervalid= setInterval(()=>{
            setTime(new Date());
        }, 1000);

        return()=>{
            clearInterval(intervalid);  //Once the component unmounts, we clear the intervalid in order to free the memory
        }

    },[]);  //Dependency will be empty array, i.e. the function will run only when the component is mounted

    function formatTime(){
        let hours= time.getHours();
        let minutes= time.getMinutes();
        let seconds= time.getSeconds();
        const meridiem= hours>=12 ? "PM" : "AM"

        hours= hours%12 || 12; //We return the normal time, and if its 12, we don't want to return zero so we have added the or operation
        
        return `${hours}: ${minutes}: ${seconds}: ${meridiem}`;
    }

    return(
        <>
        <div className="clock-container">
            <div className="clock">
                <span>00:00:00</span>
            </div>
        </div>
        </>
    )
}

export default DigitalClock