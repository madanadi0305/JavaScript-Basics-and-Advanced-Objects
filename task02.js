var nestedData = {
  innerData: {
    order: [],
    snacks: [],
    numberData: {
        primeNumbers: [],
        fibonnaci: []
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


module.exports=task02;
