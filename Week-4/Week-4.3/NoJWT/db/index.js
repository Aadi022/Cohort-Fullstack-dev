//Here I will be making the clusters and defining the schemas
const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/");

//Defining the admin schema
const AdminSchema= new mongoose.Schema({
    username: String,
    password: String
});

//Defining the user schema
const UserSchema= new mongoose.Schema({
    username: String,
    password: String,
    purchasedCourses: [{    //This will basically contain the id of the courses bought by the user
        type: mongoose.Schema.Types.ObjectId,  //Initially objectID will be stored here
        ref: "Course"             //This refernces to the database-Course
    }]
});

//Defining course schema
const CourseSchema= new mongoose.Schema({
    title: String,
    description: String,
    imageLink: String,
    price: Number
});


//Now creating the models
const Admin= mongoose.model("Admin",AdminSchema);
const User= mongoose.model("User",UserSchema);
const Course=mongoose.model("Course",CourseSchema);

//Now exporting the models so that it can be used in other modules
module.exports={
    Admin,
    User,
    Course
}