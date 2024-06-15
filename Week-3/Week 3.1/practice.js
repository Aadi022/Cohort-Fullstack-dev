/*
Practice to httpify zod and use middleware to count the number of requests. Verification of email id and password
*/

const express=require("express");
const app=express();
app.use(express.json());
const zod=require("zod");
const port=3013;
let count=0;  //Counts the number of requests coming to the server

const schema=zod.object({
    email:zod.string().email(),
    password: zod.string().min(8)
});

function usemiddle(req,res,next){
    count++;
    if(count>10){
        res.json({
            msg: "You have been blocked due to numerous tries"
        });
    }
    else{
        next();
    }
}

app.use(usemiddle);

app.post("/prac",function(req,res){
    const temp=req.body;
    const ans=schema.safeParse(temp);
    if(ans.success){
        res.json({
            msg:"Credentials have been saved"
        })
    }
    else{
        res.json({
            msg:"Enter credentails in valid format"
        })
    }
})

app.use(function(err,req,res,next){      //This is an error handling function used if something goes wrong with the server. We use this in order to not expose the source nodejs code.
    res.json({
        msg:"There is an issue in the server"
    });
})




app.listen(port);