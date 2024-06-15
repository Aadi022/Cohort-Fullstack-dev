const express=require("express");
const app=express();
const port=3007;
app.use(express.json());
const zod=require("zod");   //zod is used for input validation.

const schema=zod.array(zod.number());  //Here, schema is an array of numbers. It is an instance of the data structure to validate. Any data validated against schema must be an array of numbers.

app.post("/health-checkup",function(req,res){
    const kidneys=req.body.kidneys;
    //response will return success:true if the data type matches.
    const response=schema.safeParse(kidneys);   //safeParse is a method provided by Zod which returns an object indicating whether the validation was successful or not, and in case of failure, it includes details about the validation errors.
    if(!response.success){                //response is the status of the input validation through schema. Hence we can access the validation properties through response.
        res.status(411).json({
            msg:"Entered invalid input"
        });
    }
    else{
        res.send(response);
    }
})


app.listen(port);