const fs=require('fs');
//my own asynchronous function

function kiratsReadfile(cb){
    fs.readFile("temp.txt","utf-8",function(err,data){   //function(err,data) is a calllback function
        cb(data);     //callback function
    });
}
//callback function to call. This is the cb. 
function onDone(data){
    console.log(data);
}

kiratsReadfile(onDone);


//Now lets make our own asynchronous function using promises. Promise is an in-built class in javascript, with functions- pending, resolved, rejected.
//A Promise in JavaScript is used for asynchronous operations. It can be in one of three states: pending, resolved, or rejected. In this case, the promise has a single parameter resolve which is a function that will be called to resolve the promise.
function kiratReadFile(){    //This function returns promise
    return new Promise(function(resolve) {
        fs.readFile("temp.txt","utf-8",function(err,data){
            resolve(data);    
        });
    })
}

//callback function to call
function onDone(data){        //This function will be called once promise is resolved.
    console.log(data)
}

let a= kiratReadFile ();   //a is an instance of promise
a.then(onDone);  //.then is used to know where to send the data
//We are not giving any argument in onDone, as in onDone(data), it gets the data from the text file that was processed in the promise function.