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
var snackItems=nestedData.innerData.snacks;
var returnVal;
var is_Present;
var snackValues=Object.values(snackItems);
for(value in snackValues){
 is_Present=0;   
if(value==="chocolate"){
returnVal=value;
is_Present=1;
break;
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
