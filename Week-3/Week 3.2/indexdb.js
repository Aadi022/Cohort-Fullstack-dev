const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017")  //Connects the server with local mongodb

const User=mongoose.model('Users',{name: String, email: String, password: String});  //Creates a model named 'User'. The collection will be called 'Users' in MongoDB. Any instance stored will be in the given format.
 
const user=new User({name:"Harkirat Singh", email: "harkirat@gmail.com", password: "123456"});  //Creating an instance of User. The naamae assigned to the instance is 'user'
user.save();  //Saving the instance in the collection