import React, {useContext} from 'react'
import { UserContext } from './ComponentA.jsx'
function ComponentD(){
    const user= useContext(UserContext);

    return(
        <>
        <div className="box">
            <h1>Component D</h1>
            <h2>Bye {user}</h2>
        </div>
        </>
    )
}

export default ComponentD

/*
In ComponentD, the useContext hook is used to consume the UserContext. 
This hook provides the value of the context (which is the user state from ComponentA).

IMP- Any rendering of the state variable (which is passed from Component-A to Component-D)  in Component A, will cause the
change of value in Component D, and vice-versa.
Also if you want to use the setter function in Component D, then you will have to pass the setter function with the state variable
in the prop.
*/