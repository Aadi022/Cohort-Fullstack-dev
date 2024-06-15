const zod=require("zod");

//Here, I am going to input validate email id and string of atleast a particular size

function validateInput(obj){
    const schema=zod.object({           //Created an instance of object of parameters I want for validation
        email:zod.string().email(),   
        password:zod.string().min(8)
    });


    const response=schema.safeParse(obj);   //Did the input validation and returned the result to response
    if(response.success){
        console.log("The email and password is correct");
    }
    else{
        console.log("wrong input");
    }
}

const myobj={
    email:"aadityamta@gmail.com",
    password:"aadityamta"
};
validateInput(myobj);



