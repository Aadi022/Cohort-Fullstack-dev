//Middleware to handle user auth
const dbs=require("../db/index");
const User=dbs.User;
async function userMiddleware(req,res,next){
    //Implement user auth logic
    //Check headers and validate the user form the user DB
    const username=req.headers.username;
    const password=req.headers.password;

    const value=await User.findOne({
        username:username,
        password:password
    });

    if(value){
        next();
    }
    else{
        res.status(403).json({
            msg:"User doesn't exist"
        });
    }
}

//Exporting the userMiddleware so that other modules can use it
module.exports=userMiddleware;