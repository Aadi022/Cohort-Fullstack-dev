//So promise is a class, and while initializing the promise function, you have to pass a function as an argument, and pass an argument in the function.
/*
let d=new Promise(function(onDone){
    onDone();
});

function callback(){
    console.log(d);
}


d.then(callback);

*/
//example 
function onpromise(n){    //made our own function oustide promise
    let sum=0;
    for(let i=0;i<n;i++){
      sum=sum+i;
    }
    return sum;
}
  
  let c= new Promise(function(resolve){    //Passed an anonymous function. This is a good practice for Promise functions.
    resolve(onpromise(5));                 //called and executed our onpromise function. Once this function calls resolved, it goes to .then().
  })
  
  function callback(result){
    console.log(result);
  }
  
  c.then(callback);        //It gives the result of the function called in promise function to callback, which logs the  result.