const express=require("express");
const app=express();
const jwt=require("jsonwebtoken");
const jwtPassword="123456";
app.use(express.json());
const port= 3000;

const ALL_USERS=[
    {
        username: "harkirat@gmail.com",
        password: "123",
        name: "harkirat singh"
    },
    {
        username: "raman@gmail.com",
        password: "123321",
        name: "Raman singh"
    },
    {
        username: "priya@gmail.com",
        password: "123321",
        name: "Priya kumari"
    }
];

function userExists(username,password){
    for(let i=0;i<ALL_USERS.length;i++){
        if(ALL_USERS[i].username===username && ALL_USERS[i].password===password){
            return true;
        }
    }
    return false;
}

app.post("/signin",function(req,res){
    const username=req.body.username;
    const password=req.body.password;

    if(!userExists(username,password)){   //If user doesn't exist then we return a status code along with a message 
        res.status(403).json({
            mgs:"User doesn't exists in our database"
        });
    }

    let token=jwt.sign({username:username},jwtPassword);   //jwt.sign takes 2 input parameter. The first input(Here,username) will help in generation of the token. The second parameter(jwtpassword) will be the secret key.
    res.json({  //If user exists, we return the encrypted token
        token
    });
});

/*The code runs in the try block first. If there's any error in the code, it goes to the catch block.
If there isn't the complete execution of try block gets completed and the flow goes out of the try catch block.
*/
app.get("/users",function(req,res){
    const token=req.headers.authorization;
    try{
        //Decoding of the token. jwtPassword acts a secret key here
        const decoded=jwt.verify(token,jwtPassword);  //decoded will now have the username and iat of the token.(Check jwt.io for more clarity)
        const username=decoded.username;  //decoded has 2 parameters- username and iat
        //return a list of users other than this username
        let newusers=[];
        for(let i=0;i<ALL_USERS.length;i++){
            if(ALL_USERS[i].username!=username){
                newusers.push(ALL_USERS[i]);
            }
        }
        res.json({newusers});
    }
    catch(err){
        res.status(403).json({
            msg: "Invalid token"
        });
    }
});


app.listen(port);