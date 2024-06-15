const express=require('express');
const bodyParser= require('body-parser');
const app=express();
const adminRouter=require("./routes/admin") //single . here as index.js is in NoJWT folder, and the others were in a nested folder
const userRouter=require("./routes/user");
const port=3000;
const secret="my_server";


//Middleware for parsing request bodies
app.use(bodyParser.json());
app.use("/admin",adminRouter); //If route is /admin, then the program flow is redirected to routes->admin.js. The following routes after admin/ will be handled there
app.use("/user",userRouter);  //Same for /user



app.listen(port,function(){
    console.log("Server is running on port ",port);
}); 

module.exports=secret;