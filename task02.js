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
for(var i=0;i<fibonnacci_array.length;i++){
if(i%2!==0 && ((fibonnacci_array[i]!==undefined)||!(isNaN(fibonnacci_array[i]))||(fibonnacci_array[i]!==null))){
    
fib_array.push(fibonnacci_array[i]);

}
else{
    fib_array.push(-1);
}

}
return fib_array;
}
module.exports=task02;
