
/*
const allusers=[
    {
        firstname: "Aaditya",
        gender: "Male"
    },
    {
        firstname: "Harkirat",
        gender: "Male"
    },
    {
        firstname: "Shruti",
        gender: "Female"
    }
];

for(let i=0;i<allusers.length;i++){
    if(allusers[i].gender==="Male"){
        console.log(allusers[i].firstname);
    }
}

function iseven(a){
    if(a%2===0){
        console.log(a,"is even");
    }
    else{
        console.log(a,"is odd");
    }
}

function sum(a,b,iseven){
    let mysum=a+b;
    iseven(mysum);
}

sum(2,5,iseven);


const myobj={
    firstname: "Aaditya",
    age: 19,
    gender: "Male"
}

console.log(Object.keys(myobj));
console.log(Object.values(myobj));
console.log(Object.entries(myobj));


str="Hello world";
console.log(str.slice(3,str.length));
console.log(str.substr(0,4));


console.log(parseInt("42"));
console.log(parseInt("34kjdcn"));
console.log(parseInt(3.14));


const myarr=[1,2,3,4];
myarr.push(5);
console.log(myarr);
myarr.pop();
console.log(myarr);


class Animal{
    constructor(name,legcount,speaks){
        this.name=name;
        this.legcount=legcount;
        this.speaks=speaks;
    }
    speak(){
        console.log("Hi there"+this.speaks);
    }
    static mytype(){
        console.log("This is an Animal");
    }
}

let dog=new Animal("Oreo",4,"JH");
console.log(dog.name);
console.log(dog.legcount);
console.log(dog.speaks);
dog.speak();
Animal.mytype();  //We use the static function like this


const usersString = '{"name":"Aaditya","age":19,"gender":"Male"}';
const myuser = JSON.parse(usersString);
console.log(myuser);


const mystring={"Name":"Aaditya","Age":19, "Gender":"Male"};
const user=JSON.stringify(mystring);
console.log(user);


const fs=require('fs');

function kiratsReadfile(cb){
    fs.readFile("temp.txt","utf-8",function(err,data){
        cb(data);
    });
}

function mycallback(data){
    console.log(data);
}

kiratsReadfile(mycallback);

const fs=require('fs');

function kiratReadFile(){
    return new Promise(function(resolve){
        fs.readFile("temp.txt","utf-8",function(err,data){
            resolve(data);
        })
    })
}

function onDone(data){
    console.log(data);
}

let a=kiratReadFile();
a.then(onDone);
*/

function mysum(a,b){
    return a+b;
}

function temp(){
    let p=new Promise (function(resolve){
        resolve(mysum(2,5));
    })
    return p;
}

async function main(){
    let ans=await temp();
    console.log(ans);
}

main();