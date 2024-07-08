import React,{useState} from 'react'

function MyComponent(){

    const [todos, setTodos]= useState([]);
    const [task, setTask]= useState("");

    const handletask= function(event){
        setTask(event.target.value);   //Value in the input box will be assigned to the task variable
    }

    const handleTodo= function(){
        if(task.trim()!=""){   //Can't add an empty task
            setTodos(t => [...t,task])   //Use of updater function
        }
        setTask("");  //Reset the input box
    }

    const handleremove= function(index){
        setTodos(todos.filter((_,i)=>i!==index));
    }

    const handleup= function handleup(index){
        //The main logic is that we create a replica, do all the changes with that, and then passed it to setTodos as the main re-rendering is done with the setter function.
        let newtodos= [...todos];   //Always remember, ...todos will return the elements and todos will return the data type and characteristics.
        if(index>0){
            [newtodos[index],newtodos[index-1]]=[newtodos[index-1],newtodos[index]];  //Used array destructuring for swapping
            setTodos(newtodos);
        }
        
        else{
            alert("Can't swap for first item");
        }
    }

    const handledown= function(index){
        if(index<todos.length-1){
            let newtodos= [...todos];
            [newtodos[index],newtodos[index+1]]=[newtodos[index+1],newtodos[index]];
            setTodos(newtodos);
        }
        else{
            alert("Can't swap for last element");
        }
    }

    return(
        <>
        <div>
            <p>To-Do List</p>
            <ul>
                {todos.map((task,index)=> <li key={index}>{task} <button onClick={()=>handleremove(index)}>Task Done</button> <button onClick={()=>handleup(index)}>UP</button> <button onClick={()=>handledown(index)}>DOWN</button></li>)}
            </ul>
            <input type="text" placeholder="Enter task" value={task} onChange={handletask}></input>
            <button onClick={handleTodo}>Enter</button>
        </div>
        </>

    )
}

export default MyComponent