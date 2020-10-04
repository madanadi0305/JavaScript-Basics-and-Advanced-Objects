var recipe = {
  title: "mole",
  servings: [2, 5, 7, 9, 7, 9, 6, 5, 4, 4],
  ingredients: ["cumin", "cinnamon", "cocoa"]
};

function task11(recipe){
var list=recipe.servings;
var repeat=[];
var count,isOk;  
for(var i=0;i<list.length;i++){
var val=list[i];
count=1;  
for(var j=i+1;j<list.length;j++){
if(val===list[j]){
if(count>=2){break;}  
repeat.push(list[j]);
count=count+1;
isOk=1;  
//console.log(count);  
}
}  
}  
//console.log(repeat);
if(isOk===1)
{return repeat;}
else{return -1;}  
}

module.exports=task11;
;
