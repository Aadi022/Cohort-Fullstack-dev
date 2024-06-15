/* //MAPS
let input=[1,2,3,4,5];
const ans=input.map((number)=>{
    let temp= number*2;
    return temp;
});  
console.log(ans);
*/

//FILTER
let input2=[1,2,3,4,5];
function filterlogic(n){
    if(n%2==0){
        return true;
    }
    else{
        return false;
    }
}
const ans2=input2.filter(filterlogic);
console.log(ans2);