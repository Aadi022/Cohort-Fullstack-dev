const express=require("express");
const app=express();
const port=3005;
app.use(express.json());   //This is an in-built middleware used for parsing json bodies

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