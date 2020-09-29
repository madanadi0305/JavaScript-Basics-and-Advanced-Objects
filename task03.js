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
var snackValues=Object.values(snackItems);
for(value in snackValues){
if(value==="chocolate"){
returnVal=value;
break;
}

}
return returnVal;
}
module.exports=task03;
