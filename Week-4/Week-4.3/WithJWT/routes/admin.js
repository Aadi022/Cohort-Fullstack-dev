const express=require("express");
const adminMiddleware=require("../middleware/admin");  //Synatx to require a file from another folder
const router=express.Router();
const dbs=require("../db/index");
const Admin=dbs.Admin;
const Course=dbs.Course;
router.use(express.json());
const jwt=require("jsonwebtoken");  
const secret=require("../index");

//Admin rooutes- This will handle the nested routes after /admin/ 
router.post("/signup",async function(req,res){  //Creating account
    
    const username=req.body.username;
    const password=req.body.password;
    
    //Creating an instance in the Admin DB
    await Admin.create({
        username: username,
        password: password
    })

    res.json({
        msg:"Admin created successfully"
    })
});

router.post("/courses",adminMiddleware,async function(req,res){  //Creating a course. adminMiddleware will be called here, for this specific http function
    const username=req.body.username;
    const password=req.body.password;

    const user=await  findOne({
        username: username,
        password: password
    })

    if(user){
        const token=jwt.sign({username:username},secret);
        res.json({
            token:token
        })
    }
    else{
        res.status(403).json({
            msg:"Incorrect email and password"
        })
    }
});

router.get("/courses",adminMiddleware, async function(req,res){ //Getting all courses available
    //Here I will just send all the courses out there
    const allcourse= await Course.find({});
    res.json({
        courses: allcourse
    })
});

module.exports=router;