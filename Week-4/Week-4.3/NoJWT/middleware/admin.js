//Middleware for handling admin authentication
const dbs=require("../db/index");
const Admin=dbs.Admin;
async function adminMiddleware(req,res,next){
    //Imeplement admin auth here
    //Check headers and validate admin from the admin DB
    const username=req.headers.username;
    const password=req.headers.password;

    const value= await Admin.findOne({
        username:username,
        password:password
    });
    //If username and password is found in the database, then value returns the document id, else return NULL

    if(value){  
        next();
    }
    else{
        res.status(403).json({
            msg:"User doesn't exist"
        });
    }
}

//Exporting the adminMiddleware so that other modules can use it
module.exports=adminMiddleware;