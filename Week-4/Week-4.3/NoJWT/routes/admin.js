const express=require("express");
const adminMiddleware=require("../middleware/admin");  //Synatx to require a file from another folder
const router=express.Router();
const dbs=require("../db/index");
const Admin=dbs.Admin;
const Course=dbs.Course;
router.use(express.json());

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
    //First middleware checks for username and password in headers
    //The course format must be- title, description, price, imageLink

    //Now taking the course details for input
    const title=req.body.title;
    const description=req.body.description;
    const price=req.body.price;
    const imageLink=req.body.imageLink;

    //Now creating an instance of this in the Course database
    const newcourse= await Course.create({
        title:title,
        description:description,
        imageLink:imageLink,
        price:price
    })

    res.json({
        msg: "Course successfully created, with ID Number ",
        courseID: newcourse._id   //ID of the new instance created
    })
});

router.get("/courses",adminMiddleware, async function(req,res){ //Getting all courses available
    //Here I will just send all the courses out there
    const allcourse= await Course.find({});
    res.json({
        courses: allcourse
    })
});

module.exports=router;