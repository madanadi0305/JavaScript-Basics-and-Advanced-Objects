var recipe = {
  title: "mole",
  servings: [2, 5, 7, 9, 7, 9, 6, 5, 4, 4],
//servings:[2,1, 1, 1, 2, 3, 10,10, 10, 9, 2, 3, 3,  5,7,9, 7, 9, 6, 5,4,4],
  ingredients: ["cumin", "cinnamon", "cocoa"]
};
function task11(recipe){
var list=recipe.servings;
var duplicates=[];
var count,k;

for(var i=0;i<list.length;i++){
  count=0;
  var elem=list[i];
for(var j=i;j<list.length;j++){
if(elem===list[j]){
count=count+1;

}
k=list[j];
if(count===2){
  duplicates.push(k);
  break;
}
}

}
//var final_duplicates=[];
for(var i=0;i<duplicates.length;i++){
for(var j=i+1;j<duplicates.length;j++){
if(duplicates[j]===duplicates[i]){
  duplicates.splice(j,1);
}

}

}
return duplicates;
//console.log(duplicates);
}
module.exports=task11;
