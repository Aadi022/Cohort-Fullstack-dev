import React, {useState, createContext} from 'react'
import MyCompB from './MyCompB';
export const UserContext= createContext();

function MyCompA(){
    const [count, setCount]= useState(0);
    return(
        <>
        <div className="myborder">
            <p></p>
            <p>This is Component A</p>
            <button onClick={()=>setCount(count+1)}>Count {count}</button>
            <UserContext.Provider value={count}>
            <MyCompB count={count}></MyCompB>
            </UserContext.Provider>
            
        </div>
        </>
    )
}

export default MyCompA
