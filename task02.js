var nestedData = {
  innerData: {
    order: [],
    snacks: [],
    numberData: {
        primeNumbers: [],
        fibonnaci: [0,1,1,2,3,5,8,13,21,44,65]
    },
    
  }
}

function task02(nestedData){
var fibonacci_array=[];
var fibonacciArray=nestedData.innerData.numberData.fibonacci;
for(var i=0;i<fibonacciArray.length;i++){
if(i%2===0){
fibonacci_array.push(fibonacciArray[i]);
}
}
return fibonacci_array;
}

//task02(nestedData);
module.exports=task02;
