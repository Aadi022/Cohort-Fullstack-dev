const express=require("express");
const app=express();
const port=3002;

function sum(n){
    let ans=0;
    for(let i=1;i<=n;i++){
        ans=ans+i;
    }
    return ans;
}

app.get('/',function(req,res){
    const n=req.query.n;      //req.query.n: Extracts a query parameter n from the request URL. For example, in the URL http://localhost:3000/?n=5, n would be 5.
    const ans=sum(n);
    res.send("Hi your answer is " + ans);   //res can accept only a single parameter
})

app.listen(port);