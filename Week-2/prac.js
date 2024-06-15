/*
const express=require('express');
const app=express();
const port=3000;

app.get("/",function(req,res){
    res.send("This is working");
})

app.listen(port);


const express=require("express");
const app=express();
const port=3001;

app.get('/',function(req,res){
    console.log(req.headers);
    res.send({
        msg: "Success"
    })
})

app.listen(port);


const express=require('express');
const app=express();
const port =3002;

function iseven(n){
    if(n%2===0){
        return true;
    }
    else{
        return false;
    }
}

app.get("/",function(req,res){
    const n=req.query.n;
    if(iseven(n)){
        res.json({
            msg:"The number is even"
        })
    }
    res.json({
        msg:"The number is odd"
    })
})

app.listen(port);




const express=require("express");
const app=express();
const port=3003;
app.use(express.json());

let arr=[1,2,3,4,5];

app.get("/",function(req,res){
    res.json({arr});
})

app.post("/",function(req,res){
    const n=req.body.n;
    arr.push(n);
    res.json({arr});
})

app.listen(port);
*/

/*
Now creating a blog application.
It will consist of blog id, username, title.
*/
const express=require("express");
const app=express();
const port=3005;
app.use(express.json());

let blog=[{
    ID:1223,
    Username:"Aadi",
    Title:"Trip to Greece"
},
{
    ID:1333,
    Username:"Kirat",
    Title:"Launched Cohort"
}];

app.get("/blog",function(req,res){
    let ans={};
    for(let i=0;i<blog.length;i++){
        ans={
            ID:blog[i].ID,
            Username:blog[i].Username,
            Title:blog[i].Username
        };
    }
    res.json({ans});
})

app.get("/blog/:id",function(req,res){
    const temp=req.params.id;   
    let newobj2={};
    for(let i=0;i<blog.length;i++){
        if(blog[i].ID===parseInt(temp)){
            newobj2={
                ID:blog[i].ID,
                Username:blog[i].Username,
                Title:blog[i].Title
            };
        }
    }
    res.json({newobj2});
})

app.post("/blog",function(req,res){
    const temp=req.body.temp;
    blog.push(temp);
    console.log(blog);
})

app.listen(port);