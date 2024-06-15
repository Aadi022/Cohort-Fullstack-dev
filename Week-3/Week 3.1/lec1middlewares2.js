const express=require("express");
const app=express();
const port=3006;
let numberofrequests=0;

/*
we have created  a middleware-callrequests. This middleware keeps count of the number of requests. We use at next() in this so that 
the call stack can go to next route functions. All the route functions below this middleware will console.log the number of requests.
*/

function callrequests(req,res,next){
    numberofrequests++;
    console.log(numberofrequests);
    next();
}

app.use(callrequests);  //All the function routes below this will use will console log numberofrequests


app.get("/health-checkup",function(req,res){
    res.json({
        msg:"Your Kidney is healthy"
    });
})


app.listen(port);

/*
    Similarly, we have app.use(express()) which is used to take input from header. It pearses any input format to json format.
*/
