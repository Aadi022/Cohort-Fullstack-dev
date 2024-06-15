const express=require("express");
const app=express();
const port=3000;

app.post('/conversations',function(req,res){   
    console.log(req.headers);
    res.send({                                //responsing in the form of json
        msg: "2+2=4"
    })
})

app.listen(port,function(){
    console.log("Example of listening on port");
})