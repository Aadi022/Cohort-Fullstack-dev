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
const port=3004;

let blog=[{
    ID:15531,
    Title:"Trip to greece",
    Content:"I went to Santorini"
},
{
    ID:15562,
    Title:"Finals Week",
    Content:"It was a hell week"
},
{
    ID:16672,
    Title:"Family Get-together",
    Content:"Refreshing get-together after stressful week of work"
}];


app.get("/blog",function(req,res){    //Creating a newblog array and copying all info of blog to newblog. Iterate through each object in blog array, create a new object in each iteration and copy that object in the new object
    let newblog=[];
    for(let i=0;i<blog.length;i++){
        const newobj={
            ID:blog[i].ID,
            Title:blog[i].Title,
            Content:blog[i].Content
        };
        newblog.push(newobj);
    }
    res.json({newblog});
})

app.get("/blog/:ID",function(req,res){
    const temp=req.params.ID;          //temp will store the ID given in the route. For eg:If route is given /blog/1223, temp will store 1223.
    let newobj2={};
    for(let i=0;i<blog.length;i++){
        if(blog[i].ID==temp){
            newobj2={
                ID:blog[i].ID,
                Title:blog[i].Title,
                Content:blog[i].Content
            }
        }
    }
    res.json({newobj2});
})


//Not doing post of a new object in blog for now because knowledge of middleware will be required. Will get back to it later.


app.put("/blog/:ID",function(req,res){
    const temp2=req.params.ID;
    for(let i=0;i<blog.length;i++){
        if(blog[i].ID==temp2){
            blog[i].Content="The content got changed";
            break;
        }
    }
    res.json({});
})


app.delete("/blog/:ID",function(req,res){
    const temp3=req.params.ID;
    const newobject={};
    let i;
    for(i=0;i<blog.length;i++){
        if(blog[i].ID==temp3){
            blog[i]=newobject;
            break;
        }
    }
    res.json({});
})



app.listen(port);