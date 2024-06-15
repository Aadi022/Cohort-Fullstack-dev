const express=require("express");
const router=express.Router();
const userMiddleware=require('../middleware/user');  //Calling the userMiddleware which has the logic for user authentication
const dbs=require("../db/index");
const User=dbs.User;
const Course=dbs.Course;

//User routes- This will handle the nested routes after /user/
router.post("/signup",function(req,res){  //Creating an account
    const username=req.body.username;
    const password=req.body.password;

    //Now adding these user details to user database
    User.create({
        username: username,
        password: password
    })

    res.json({
        msg:"The user has been successfully created"
    })
});

router.get("/courses", async function(req,res){  //Lists all courses. No Middleware used here as any user can view all coourses, but you need to be a specific user to view your specific purchased courses
    const allcourses=await Course.find({});
    res.json({
        courses: allcourses
    })
});

router.post("/courses/:courseID",userMiddleware,async function(req,res){  //Purchase a course
    //We will update the user database with the bought Course ID
    const courseID=req.params.courseID;  //The course id is passed as a parameter in the url as stated in the route
    const username=req.headers.username; //The username and password is already passed in the headers for the middleware to authorize
    await User.updateOne(
        {username:username},
        {
            "$push":{
                purchasedCourses:courseID
            }
        }
    )

    res.json({
        msg:"The purchase has been completed"
    })
});

router.get("/purchasedCourses",userMiddleware, async function(req,res){   //Get all purchased courses
    const username=req.headers.username;
    const user=await User.findOne({
        username:username  //user now has all the document info of username provided in the header
    });
    console.log(user.purchasedCourses);
    const courses=await Course.findOne({
        _id:{
            "$in":user.purchasedCourses   //This query uses the $in operator to select documents where the _id field matches any ID in user.purchasedCourses.
        }                                   //So basically read it like- return all course details from course where id is in user.purchasedCourses array
    });
    

    res.json({
        courses: courses
    })
});

module.exports=router;