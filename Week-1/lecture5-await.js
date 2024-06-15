/*
function temp(){
    let p=new Promise(function(resolve){
        resolve("Hi There");
    });
    return p;
}

async function main(){       //writing this part of code is necessary
    let ans=await temp();
    console.log(ans);
}

main();
*/

function temp(){
    let p=new Promise(function(resolve){
        setTimeout(function(){
          resolve("Hi there")}
          ,5000);
    });
    return p;
}


async function main(){
    let ans=await temp();
    console.log(ans);
    console.log("Hi there2");
}

main();
console.log("Outside main");

/*
    So in the above code it moves normally like an asynchronous code. But observe the difference-
    First the synchronous part gets printed which is outside the main(). Then the thread moves to async main(). First the thread waits for 5 seconds for Hi there to 
    print, and then Hi there2 gets printed. Notice that Hi there2 doesn't gets printed before Hi there. This won't happen if we use .then() to execute, instead of 
    async main(). But this is an intentional move somtimes when you want the first thing to get logged and then the second thing.
    So basically in the async main(), the threads move in synchronization.

*/