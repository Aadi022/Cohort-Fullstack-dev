//Here we will not hardcode the elements in List.jsx, infact we will keep it general
import List from './List.jsx'

function App() {

  const fruits=[{id:1, name:"apple", calories: 95},
    {id:2, name:"orange", calories: 45},
    {id:3, name:"banana", calories: 105},
    {id:4, name:"coconut", calories: 159},
    {id:5, name: "pineapple", calories: 37}];

  const vegetables=[{id:6, name:"potatoes", calories:110},
    {id:7, name:"celery", calories:15},
    {id:8, name:"carrots", calories: 25},
    {id:9, name:"corn", calories: 63},
    {id:10, name:"broccoli", calories: 50}];

    return( //Basically if fruits.length>0/vegetables.length>0 then we return the html element, else no.
      <>
      {fruits.length>0 ? <List items={fruits} category="Fruits"></List> : null} 
      {vegetables.length>0 ? <List items={vegetables} category="Vegetables"></List> : null} 
      </>
    )
    //Notice that we are passing props properties while returning.
}

export default App

//Thereby we see our List.jsx is reusable