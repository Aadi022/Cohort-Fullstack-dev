import React, {useState} from 'react'
function MyComponent(){

    const [foods,setFoods]= useState(["Apple", "Orange", "Banana"]);  //We are initializing the state foods with this array
    const [newfood, setNewfood]= useState("");

    const updatefood= function(event){
        setNewfood(event.target.value);
    }

    const handleAddFood= function(){
        setFoods(f=>[...f, newfood]);  //Whenever we want to add an element in an array or json, we ALWAYS AND ALWAYS MAKE USE OF SPREAD FUNCTION
        setNewfood("");  //Always remember to reset back the newfood. By this, the input box value nullifies again
    };

    const handleRemoveFood= function(index){  //index will be given as the argument. the main logic is that the element, with the specific index(when onclick is performed) will be eliminated. So for eg: if its index 4, then we will traverse from 0 to length of the string. For all the index not equal to 4 will be filtered to updated array, and 4 will be eliminated.
        setFoods(foods.filter((element,i)=>i!==index));
    }


    return(  //index is the iteration of the specific element in the state array
        <>
            <div>
                <h2>List of Food</h2>
                <ul>
                    {foods.map((food,index) => <li key={index} onClick={()=>handleRemoveFood(index)}>
                        {food}</li>)}   
                </ul>
                <input type="text" value={newfood} onChange={updatefood} placeholder="Enter food name"></input>
                <button onClick={handleAddFood}>Add Food</button>
            </div>
        </>
    )
}

export default MyComponent