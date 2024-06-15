const express=require("express");
const app=express();
const port=3003;
app.use(express.json());

//users is an array of objects, and in each object, kindey,which is a key in the object, has an array of objects. The array is of size two,i.e. info about the two kidneys
const users=[{
    name:"John",
    kidneys:[{
        healthy:false
    }]
}];

app.get("/",function(req,res){           
    let johnKidneys=users[0].kidneys;
    let numberofkidneys=johnKidneys.length;
    let numberofhealthykidneys=0;
    for(let i=0;i<johnKidneys.length;i++){
        if(johnKidneys[i].healthy==true){
            numberofhealthykidneys=numberofhealthykidneys+1;
        }
    }
    const numberofunhealthykidneys=numberofkidneys-numberofhealthykidneys;
    res.json({         //res.json will send data to client in json format
        johnKidneys,
        numberofhealthykidneys,
        numberofunhealthykidneys
    })
})

app.post("/",function(req,res){           //The number of times I send post request from postman, that much times the kidneys gets updated
    const isHealthy=req.body.isHealthy;    //You have to give the body as isHealthy:true because we're catching isHealthy. It depends on the variable
    users[0].kidneys.push({
        healthy:isHealthy
    })

    res.json({
        msg:"Done!"
    })
})

app.put("/",function(req,res){
    if(unhealthykidneys()){
        for(let i=0;i<users[0].kidneys.length;i++){
            users[0].kidneys[i].healthy=true;
        }
        res.json({});   //Since I'm making changes in json format, I will respond in json
    }
    else{
        res.status(411).json({
            msg:"You have no unhealthy kidneys"
        })
    }
})

app.delete("/",function(req,res){
    //Basically we are creating an array 'newkidneys'. We count the number of healthy kidneys, and that in the new array. We then replace kidneys with newkidneys
    if(unhealthykidneys()){
        const newkidneys=[];
        for(let i=0;i<users[0].kidneys.length;i++){
            if(users[0].kidneys[i]==true){
                newkidneys.push({
                    healthy:true
                })
            }
        }
        users[0].kidneys=newkidneys;
        res.json({});
    }
    else{
        res.status(411).json({
            msg:"You have no unhealthy kidneys"
        })
    }
})

 
//Logically, for put,delete to run, we must have at least one unhealthy kidney. So we'll throw a status code if there is no unhealthy kidney


function unhealthykidneys(){              //returns true if there doesn't exist a healthy kidney, returns false otherwise
    let ishealthy=true;
    for(let i=0;i<users[0].kidneys.length;i++){
        if(users[0].kidneys[i].healthy==true){
            ishealthy=false;
        }
    }
    return ishealthy;
}

app.listen(port)
