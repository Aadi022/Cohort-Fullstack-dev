import React,{useContext} from 'react'
import { UserContext } from './MyCompA'


function MyCompC(){
    const count= useContext(UserContext);
    return(
        <>
        <div className="myborder">
            <p>This is Component C</p>
            <p>The Count is: {count}</p>
        </div>
        </>
    )
}

export default MyCompC

//Hence we see if the count renders at component A, it will render at Component C also, and vice versa