const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017");
const MyUser=mongoose.model('myusers',{name: String, email: String, password: String});
const newuser=new MyUser({name:"Aaditya Mehta", email:"aadityamta@gmail.com", password:"abcdef"});
newuser.save(); 