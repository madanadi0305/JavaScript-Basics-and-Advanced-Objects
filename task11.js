  var recipe = {
  title: "mole",
  servings: [2, 5, 7, 9, 7, 9, 6, 5, 4, 4],
  //servings:[2,1, 1, 1, 2, 3, 10,10, 10, 9, 2, 3, 3,  5,7,9, 7, 9, 6, 5,4,4],
  ingredients: ["cumin", "cinnamon", "cocoa"]
};

function task11(recipe){
var list=recipe.servings;
var val;
console.log(list);
var counts={};
var list2=[];
var list3=[];
for(var i=0;i<list.length;i++){
val=list[i];


  if(!counts[val]){
  counts[val]=1;
  }
  else{
  counts[val]=counts[val]+1;

}

}
console.log(counts);
for(var Val in counts){
if(counts[Val]>=2){
list2.push(Val);
}
console.log(list2);
}
for(var i=0;i<list.length;i++){
for(var j=0;j<list2.length;j++){
if(list2[j]===list[i]){
list3.push(list[i]);

}

}
}
//console.log(list3);
return list3;
}
module.exports=task11;
//task11(recipe);
