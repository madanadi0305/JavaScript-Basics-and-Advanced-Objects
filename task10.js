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
    title: ["BMW", [{ id: 01, name: "R8" }, { id: 02, name: "r7" }], "maruti"],
    isDone: true
  }
];
function task10(obj){
 var carName;   
for(var i=0;i<obj.length;i++){
  if(i==2){
      var title_list=obj[i].title;
      console.log(title_list);
    var titleElement=title_list[1];
    for(var i=0;i<titleElement.length;i++){
    var elem=titleElement[i];
    if(elem["id"]===1){
    carName=elem["name"];
    }
    
    
    }
  }   
}
return carName;
}
module.exports=task10;
console.log(a);
//module.exports=task10;
