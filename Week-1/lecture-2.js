/*
function findindex(str,target){
    console.log("Original String:",str);
    console.log("Index:",str.indexOf(target));
}
findindex("Hello World","World");


str="Hello World";
console.log(str.slice(3,str.length));     //String.slice(begin,end) helps slicing the string

console.log(str.substr(0,4));     //string.substr(start,length) returns the string from starting ending, of size length

console.log(str.replace("World","Javascript"));



let value="We are learning Javascript";
let words= value.split(" ");  //.split splits the string into an array based on the parameter given in the brackets. Since spacebar is a parameter here, a new element is entered in the array when space is encountered.
console.log(words);
let eg2=value.split("r");
console.log(eg2);


const word="    Aaditya    ";
console.log(word.trim());  //It removes the extra spaces from start and end
console.log(word.trimStart());
console.log(word.trimEnd());


const word="AadI";
console.log(word.toUpperCase());
console.log(word.toLocaleLowerCase());


//parseInt converts a string to an integer. If given any gibberish after, it converts it to integer. 
//parseInt is a global function, i.e. it doesn't require any variable name before it.
console.log(parseInt("42"));
console.log(parseInt("22kdm"));
console.log(parseInt("3.14"));


const initialArray=[1,2,3];
initialArray.push(4);       //adds element at the end of the array
console.log(initialArray);
initialArray.pop();         //removes element from the end of the array
console.log(initialArray);
initialArray.unshift(0);    //adds element at the start of the array
console.log(initialArray);
initialArray.shift();       //removes element from the end of the array
console.log(initialArray);


const initialArray=[1,2,3];
const secondArray=[4,5,6];
console.log(initialArray.concat(secondArray));     //a.concat(b) concats a and b

const word1="abc";
const word2="def";
console.log(word1.concat(word2));

const obj1={
    firstpart: "This is",
    name: "Aaditya"
};
const obj2={
    firstpart: "This is",
    name:"Aaditya"
};
function printstr(x){
    console.log(x.firstpart+" "+x.name);
}

printstr(obj1);
printstr(obj2);

//example of a function call back- Binary Search and then checking if the returned value is odd or even
function cb1(x, y) {
    let s = 0;
    let e = x.length - 1;
    while (s <= e) {
        let mid = s + Math.floor((e - s) / 2); // Correct calculation of mid
        if (x[mid] > y) {
            e = mid - 1;
        } else if (x[mid] == y) {
            return mid;
        } else {
            s = mid + 1;
        }
    }
    console.log("The target element doesn't exist in the array");
    return -1;
}

function type(x) {
    if (x != -1) {
        if (x % 2 == 0) {
            console.log("Target index is an even number\n");
        } else {
            console.log("Target index is an odd number\n");
        }
    }
}

const arr1 = [1, 2, 3, 4, 5, 6];
let target = 4;
type(cb1(arr1, target));


const currentdate=new Date();     //So basically Date is a pre-built class for us. We can access its member-functions
console.log(currentdate.getMonth()+1); 
*/

