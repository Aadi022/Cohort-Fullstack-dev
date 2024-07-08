
function List(){
    const fruits=[{id:1, name:"apple", calories: 95},
                {id:2, name:"orange", calories: 45},
                {id:3, name:"banana", calories: 105},
                {id:4, name:"coconut", calories: 159},
                {id:5, name: "pineapple", calories: 37}];

    /*fruits.sort(function(a,b){         //This sorts in alphabetical order
        return a.name.localeCompare(b.name);
    })*/  

    /*fruits.sort(function(a,b){       //This sorts in reverse alphabetical order
        return b.name.localeCompare(a.name);
    })*/

    /*fruits.sort(function(a,b){   //This sorts the calories in ascending order
        return a.calories-b.calories;
    })*/

    /*fruits.sort(function(a,b){   //This sorts the calories in descending order
        return b.calories-a.calories;
    })*/
    
    const listitems=fruits.map(function(fruit){
        //Whenever while returning an array in a list in child component, always attach a key alongside. This helps react in re-rendering particular elements in reactdom
        return <li key={fruit.id}>{fruit.name}: {fruit.calories} calories</li>   //Don't forget to enclose javascript data type in curly brackets while returning
    })

    return(
        <ol>{listitems}</ol>   //ol stands for ordered-lists, just like ul-stood for unordered-lists
    )
}

export default List