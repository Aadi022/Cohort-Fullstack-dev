/*
    Creating a basic blog backend server, using put,post,delete,get functions in express.
    POST /blog to add a new post.
    GET /blog to retrieve all posts.
    GET /blog/:id for fetching a post by ID.
    PUT /blog/:id for updating a post.
    DELETE /blog/:id for deleting a post.
*/ 

const express=require("express");
const app=express();
const port=3005;
app.use(express.json());   //This is an in-built middleware used for parsing json bodies
let blog=[{
    ID: 1552,
    Title: "Got Placed",
    Content: "Leetcome came to work"
},
{
    ID: 1789,
    Title: "My first project",
    Content: "My MERN Stack Project"
},
{
    ID: 2102,
    Title: "Trip to Santorini",
    Content: "Enjoyed my trip to Santorini"
}]

app.get("/blog",function(req,res){
    let ans=[];
    for(let i=0;i<blog.length;i++){
        let newobj={
            ID:blog[i].ID,
            Title:blog[i].Title,
            Content:blog[i].Content
        };
        ans.push(newobj);
    }
    res.json({ans});
})

app.get("/blog/:id",function(req,res){
    const temp=req.params.id;       //localhost:3005/123
    let newobj2={};
    for(let i=0;i<blog.length;i++){
        if(temp==blog[i].ID){
            newobj2={
                ID:blog[i].ID,
                Title:blog[i].Title,
                Content:blog[i].Content
            };
        }
    }
    res.json({newobj2});
})


app.post("/blog",function(req,res){
    const temp=req.body.temp;
    let temp2={
        ID:temp.ID,
        Title:temp.Title,
        Content:temp.Content
    };
    blog.push(temp);
    res.json({
        msg: "New object added"
    });
})

app.listen(port);