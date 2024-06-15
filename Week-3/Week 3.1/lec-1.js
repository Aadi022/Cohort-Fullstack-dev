//To use the same status code conditions in other app.methods, we'll have to use the same if-else conditions everywhere. To avoid this, we'll need to use middlewares.

const express=require("express");
const app=express();
const port=3006;

app.get("/health-checkup",function(req,res){
    const username=req.headers.username;
    const password=req.headers.password;
    const kidneyID=req.query.kidneyID;

    if(username!="harkirat" || password!="pass"){
        res.status(400).json({msg:"Something is wrong with the input"})
        return                                                          //Here, return basically ensures that the call stack doesn't move any forward
    }

    if(kidneyID!=1 && kidneyID!=2){
        res.status(400).json({msg:"Something is wrong with the input"})
        return
    }

    //do some logic with kidney data
    res.json({
        msg:"Your Kidney is fine!"
    })
});

app.listen(port);