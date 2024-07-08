/*
This is a better way of creating lists and handling arrays. In part-1, the elements were hard-coded in List.jsx.
But here, List.jsx can handle for any array of json, with properties- id, name and calories.
Basically App.jsx sends a sepcific array, and List.jsx handles that specific array. Hence, List.jsx can now handle any type of array of json with similar properties.
*/
import proptypes from 'prop-types'

function List(props){

    const category= props.category;
    const itemList=props.items   //items is the fruits array

    const listitems= itemList.map(function(item){  //listitems will contain list form of every array element
        return <li key={item.id}> {item.name}: {item.calories} calories</li>
    })

    return(
        <>
        <h3 className="list-category">{category}</h3>
        <ol className="list-items">{listitems}</ol>  
        </>
    )
}

List.prototype={
    category: proptypes.string,
    items: proptypes.arrayOf(proptypes.shape({id: proptypes.number, name: proptypes.string, calories: proptypes.string}))  //This is how we define array in proptypes. We first say it should be an array, then define the properties of json.
}

export default List