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
var snacks=nestedData.innerData.snacks;
var snackKeys=Object.keys(snacks);
var snackItem=snacks[snackKeys[1]];
var snackItemKeys=Object.keys(snackItem);

var retVal=snackItem[snackItemKeys[0]];
return retVal;
}
module.exports=task03;
