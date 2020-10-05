var nestedData = {
  innerData: {
    order: [],
    snacks: [],
    numberData: {
        primeNumbers: [],
        fibonnaci: []
    },
    
  }
};

function task02(nestedData){
var fib_array=[];

var fibonnacci_array=nestedData.innerData.numberData.fibonnaci;
/*if(fibonnacci_array===[]||fibonnacci_array===null){
return -1;

}*/ 
console.log(fibonnacci_array);
for(var i=0;i<fibonnacci_array.length;i++){
if(i%2===0){
 var value=fibonnacci_array[i];
/*if(value===false||value===undefined||value==="undefined"||value===""||value===null||value===-1||isNaN(value)){
  fib_array.push(-1);
}*/  
//else{  
fib_array.push(value);
//}
}


}
console.log(fib_array);
fibonnacci_array=fib_array;
return fibonnacci_array;
}
module.exports=task02;
