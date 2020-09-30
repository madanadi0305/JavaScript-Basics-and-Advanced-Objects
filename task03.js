var nestedData = {
  innerData: {
    order: ["first", "second", "third"],
    snacks: [
      { item: "chips", cost: 20 },
      { itemName: "chocolate", cost: 40 },
      { itemName: "fruits", cost: 80 }
    ],
    numberData: {
      primeNumbers: [2, 3, 5, 7, 11],
      fibonnaci: [1, 1, 2, 3, 5, 8, 13]
    }
  }
};



function task03(nestedData){
var is_Present,returnVal;
var snacks=nestedData.snacks;
var snackKeys=Object.keys(nestedData.snacks);
//console.log(snackKeys);
//console.log(nestedData.snacks[snackKeys[1]]);
for(keys in snackKeys){
var snackValue=snacks[snackKeys[keys]];
 console.log(snackValue); 
 var snack_snack_keys=Object.keys(snackValue);
 for(key1 in snack_snack_keys){
 var snackSnackValue=snackValue[snack_snack_keys[key1]];
  //console.log(snackSnackValue); 
   if(snackSnackValue==='chocolate'){
   is_Present=1;
   returnVal=snackSnackValue;  
   break;  
   }
 }
  
}

if(is_Present===1){
return returnVal;

}

else{
return -1;
}
}
module.exports=task03;
//var a=task03(nestedData);
//console.log(a);
