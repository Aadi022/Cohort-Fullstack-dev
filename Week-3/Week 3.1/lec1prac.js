const express=require("express");
const app=express();
const port=3000;
app.use(express.json());

let count=0;

function mymiddle(req,res,next){
    count++;
    console.log(count);
    if(count>20){
        res.json({
            msg:"You have been blocked for multiple wrong entires"
        });
    }
    else{
        next();
    }
}


app.post("/user",mymiddle,function(req,res){
    const usernames=req.body.usernames;
    res.json({
        msg:"The array of usernames entered is "+usernames
    });
})

app.use(function(err,req,res,next){
    res.json({
        msg:"There is something wrong with the server"
    });
})

app.listen(port);