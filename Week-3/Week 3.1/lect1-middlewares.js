const express=require("express");
const app=express();
const port=3006;

function usermiddleware(req,res,next){
    const username=req.headers.username;
    const password=req.headers.password;
    if(username!=="harkirat" || password!=="pass"){
        res.status(403).json({
            msg:"Incorrect Input"
        });
    }
    else{
        next();
    }
}

function kidneymiddleware(req,res,next){
    const kidenyID=req.query.kidenyID;
    if(kidenyID!==1 && kidenyID!==2){
        res.status(403).json({
            msg:"Incorrect Input"
        });
    }
    else{
        next();
    }
}

app.get("/health-checkup",usermiddleware,kidneymiddleware,function(req,res){   //This applies middleware only to this route function. app.use(middleware) applies middleware globally
    res.json({
        msg:"Your Kidney is healthy"
    });
})


app.listen(port);