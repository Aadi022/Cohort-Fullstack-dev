const express=require("express");
const app=express();
const zod=require("zod");
const port=3012;
app.use(express.json());

const schema=zod.object({
    email:zod.string().email(),
    password:zod.string().min(8)
});

app.post("/temp",function(req,res){
    const dummy=req.body;
    const response=schema.safeParse(dummy);
    if(response.success){
        res.json({
            msg:"The credentials entered are of correct format"
        });
    }
    else{
        res.json({
            msg:"Invalid format of the credentials"
        });
    }
})

app.use(function(err,req,res,next){
    res.json({
        msg:"There is an issue in the server"
    });
})

app.listen(port);