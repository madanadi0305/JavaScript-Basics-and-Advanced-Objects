var recipe = {
  title: "mole",
  servings: [2, 5, 7, 9, 7, 9, 6, 5, 4, 4],
  ingredients: ["cumin", "cinnamon", "cocoa"]
};

function task11(recipe){
var servings_array=recipe.servings;
var repeat_array=[];  
for(var i=0;i<servings_array.length;i++){
var elem=servings_array[i];
  for(var j=i+1;j<servings_array.length;j++){
   if(servings_array[j]===elem){
   repeat_array.push(elem);
   }

}

}
console.log(repeat_array);
  return repeat_array;
}
module.exports=task11;
