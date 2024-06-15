const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/");
const testUser=mongoose.model('Tests',{Name:String, Subject:String});
const mytest=new testUser({Name:"Aadi",Subject:"ADS"});
mytest.save();