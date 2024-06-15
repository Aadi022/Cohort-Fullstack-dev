/*
let myname="Aaditya";        //by declaring variables with let, you can change their values later. This is not the case with const.
let age=18;
let ismarried=false;
console.log("This person's name is",myname,"and their age is",age);
if(age===18){
    console.log("The person can vote");
}
else if(age===17){
    console.log("The person can vote next year");
}
else{
    console.log("The person can't vote");
}

let a=5;
for(let i=1;i<11;i++){
    let mult=a*i;
    console.log(a,"*",i,"=",mult);
}


let a=5;
let i=1;
while(i!=10){
    let mult=a*i;
    console.log(a,"*",i,"=",mult);
    i++;
}


const ages=[21,22,23,24,25];         //Its a good practice to initaite an array or object with const, and initiate a variable with let.
for(let i=0;i<ages.length;i++){
    if(ages[i]%2===0){
        console.log(ages[i]);
    }
}

const personarray=["Aaditya","Harkirat","Shruti"];
const genderarray=["male","male","female"];
for(let i=0;i<personarray.length;i++){
    if(genderarray[i]==="male"){
        console.log(personarray[i]);
    }
}

//objects         //objects in javascript are used to aggregate data together. It is similar to structs in C.
const users1={
    firstname: "Aaditya",
    gender:"male"
}

console.log(users1.firstname);



const allusers=[
    {
        firstname:"Aaditya",
        gender:"Male"
    },
    {
        firstname:"Harkirat",
        gender:"Male"
    },
    {
        firstname:"Shruti",
        gender:"Female"
    }
];

for(let i=0;i<allusers.length;i++){
    if(allusers[i].gender==="Male"){
        console.log(allusers[i].firstname);
    }
}

//functions syntax

function findsum(a,b){
    return a+b;
}

let c=findsum(5,2);
console.log(c);


function sum(x,y,fntocall){
    let result=x+y;
    fntocall(result);
}
function display(result){
    console.log("The sum of two numbers are",result);
}
sum(5,2,display);
//These are called callbacks


//Some Math Functions
console.log(Math.random());
console.log(Math.floor(2.8)); //returns the biigest integer smaller than 2.8
console.log(Math.ceil(2.4));  //returns the smallest integer bigger than 2.4
*/

const obj={
    firstname:"Aaditya",
    age:19,
    gender:"Male"
}
console.log(Object.keys(obj));  //Here Object.keys() is a global property
console.log(Object.values(obj));
console.log(Object.entries(obj));
let newobj=Object.assign({},obj,{newProperty:"newValue"});
console.log(newobj);