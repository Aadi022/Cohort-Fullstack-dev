const express=require("express");
const app=express();
const port=3007;
app.use(express.json());

app.post("/health-checkup",function(req,res){
    const kidneys=req.body.kidneys;
    const kidneylength=kidneys.length;

    res.send("You have "+kidneylength+" kidneys");
})

//global catch. This middleware will be at the end to deal with exceptions,i.e. if there is any error(like wrong input entered in the body, then this middleware will come in use)
app.use(function(err,req,res,next){
    res.json({
        msg:"Something is wrong with the server"
    });
})

app.listen(port);

/*Till now we have learned two ways of exxception handling in order to not expose our backend code-
1)Status Code
2)Middlewares and Global Catches
*/