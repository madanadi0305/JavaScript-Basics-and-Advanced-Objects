var obj = {
  types: {
    binary: [],
    decimal: [],
    numberData: {
        primeNumbers: [1,2,3,4,5],
        fibonnaci: []
    }
   
  }
}


function task01(obj){
var prime_array=[];
var primeNumberValues=obj.primeNumber;
primeNumberValues.forEach(value=>{
prime_array.push(value);

});
return prime_array;
}
module.exports=task01;
