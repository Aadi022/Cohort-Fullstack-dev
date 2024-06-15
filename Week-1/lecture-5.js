//example of asynchrous in JS- context switch or delegating task
/* Herein, when the callstack reaches to setTimeout, the function findsumtill100 waits for 1000 milliseconds to execute. By this 
   time, "Hello World" runs and then findsumtill100 proceeds. Hence it is asynchronous.setTimeout is a global function in 
   javascript, which is asynchronous. 
*/
   function findsum(n){
    let sum=0;
    for(let i=0;i<n;i++){
        sum=sum+i;
    }
    return sum;
}

function findsumtill100(){ 
    let ans= findsum(100);
    console.log(ans);
}

setTimeout(findsumtill100,1000)   //setTimeout makes a seperate call stack wait for specified time. The main call stack goes to Hello World, and then the seperate call stack returns the function value,from setTimeout, in the main call stack.
console.log("Hello World");


//Basically this is a syntax to read file details
const fs= require("fs");
//fs is filesystem module that gives access to stuff like reading from a file, writing to a file
fs.readFile("temp.txt","utf-8",function(err,data){
    console.log(data);
});
console.log("Hello World");
//temp.txt is the file name, utf-8 is the method of encoding-decoding, function(err,data) is an anonymous data
//This is an asynchronous function. First Hello World takes place and then the file is read.
//It takes time to read from a file system, so first hello world print then file reading takes place. 
//If a very long process is in between, like a for-loop iterating 1000 values, then the file content will be returned back once for loop ends. Asynchronous functions executes only when the thread is idle, i.e. the thread has finished all the synchronous tasks.
//If there are two asynchronous functions, first and second, but the second timer is processed faster than the first timer. So at the callback queue, second will be placed earlier than first. This means that after thread is done with synchronous processes, it will go to the asynchronous process, wherein it'll first go to second and then first.


