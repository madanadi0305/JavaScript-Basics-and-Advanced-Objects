var recipe = {
  title: "mole",
  //servings: [2,1,1,1,2,3,10,10,10,9,2,3,3,5,7,9,7,9,6,5,4,4],
  //servings:[2, 5, 7, 9, 7, 9, 6, 5, 4, 4],
   servings:{},
  ingredients: ["cumin", "cinnamon", "cocoa"]
};

function task11(recipe){
var list=recipe.servings;
var repeat=[];
var repeat_1=[];  
var count,k;
var max;  
console.log("Original List:",list);  

for(var i=0;i<list.length;i++){
var val=list[i];
count=0;
 for(var j=i;j<list.length;j++){
if(list[j]===val){

 k=list[j];



  
 if(count===2){
   repeat.push(k);
   break;
 }
  count=count+1;
}

}
  
}  
console.log("New List:",repeat);  
return repeat;  
}
module.exports=task11;
//var a=task11(recipe);
//console.log(a);
