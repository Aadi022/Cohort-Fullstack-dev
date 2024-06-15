const bcrypt=require("bcryptjs");
const password="mypassword";
const saltRounds=10;  //10-12 saltRounds gives a safe hash value

async function hashing(password, saltRounds){
    const hashval=await bcrypt.hash(password,saltRounds);
    console.log(hashval);
}

hashing(password,saltRounds);

async function verifypassword(password,hashedpassword){
    const result= await bcrypt.compare(password,hashedpassword);
    if(result){
        console.log("The password has matched, and is correct");
    }
    else{
        console.log("The password is incorrect");
    }
}

verifypassword("mypassword","$2a$10$gwmkaBwKOGbGzZEDxyX95u/xSe3e9.KGhF8d8E2tFBqWjadZF.GDW");