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
var chocolate;    
var snackArray=nestedData.innerData.snacks;
Object.keys(snackArray).forEach(key=>{
var value=snackArray[key];
if(value==="chocolate")
{
    chocolate=value;
    break;
}
});
return chocolate;
}
module.exports=task03;
