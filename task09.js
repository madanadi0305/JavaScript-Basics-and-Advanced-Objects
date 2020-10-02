var obj = [
  {
    title: "buy meal",
    isDone: false
  },
  {
    title: "come office on time",
    isDone: false
  },
  {
    title: ["BMW", "Mercedez", "maruti"],
    isDone: true
  }
];
function task09(obj){
var title_array=[];    
var objKeys=Object.keys(obj);
for(var [key,value]in objKeys){
value=obj[key];
title_array.push(value.title);
}
return title_array;
}
module.exports=task09;
