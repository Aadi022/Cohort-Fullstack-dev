/*
1)Write a function that takes in a username and password and returns a JWT token with the username encoded. Should return null if the username is not a valid email or if the password is less than 6 characters. Try using the zod library here
2)Write a function that takes a jwt as input and returns true if the jwt can be DECODED (not verified). Return false otherwise
3)Write a function that takes a jwt as input and returns true if the jwt can be VERIFIED. Return false otherewise
*/

const jwt=require("jsonwebtoken");
const zod=require("zod");
const mykey="secretkey"

myobj={
    username:"aadityamta@gmail.com",
    password:"aaditya"
};

myobj2={
    username:"aadityamta",
    password:"123"
};

function helper(obj){
    const schema=zod.object({
        username:zod.string().email(),
        password:zod.string().min(6)
    });

    const resp=schema.safeParse(obj);
    return resp.success;
}

function validatemail(obj){
    const resp=helper(obj);
    if(!resp){
        console.log("The email or password format is invalid");
    }
    else{
        const token=jwt.sign({username:obj.username},mykey);
        return token;
    }
}

function decode(token){
    const decoded=jwt.decode(token);   
    if(decoded){
        return true;
    }
    else{
        return false;
    }
}

function jwtverify(token){
    try{
        const decoded=jwt.verify(token,mykey);
        return true;
    }
    catch(err){
        return false;
    }
}

const token=validatemail(myobj2);
console.log(token);
const ans=jwtverify(token);
console.log(ans);
