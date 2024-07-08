import React, {useState, createContext} from 'react'
import ComponentB from "./ComponentB.jsx"
import ComponentD from './ComponentD.jsx';

export const UserContext= createContext();

function ComponentA(){

    const [user, setUser]= useState("aadi");

    /*
    The UserContext.Provider component is used to provide the user value to all the descendant components of ComponentA.
    ComponentB doesn't use the context directly but renders ComponentC.
    ComponentC also doesn't use the context directly but renders ComponentD.
    */
    return(
        <>
        <div className="box">
            <h1>Component A</h1>
            <h2>Hello {user}</h2>
            <UserContext.Provider value={user}>   
                <ComponentB user={user}></ComponentB>
            </UserContext.Provider>
        </div>
        </>
    )
}

export default ComponentA

//So basically we use Context API when we want to pass a prop in nested components, and we don't want to pass it through each level of the component.
//By using Context API, we can deal with the props only in the senders end and receiver end.