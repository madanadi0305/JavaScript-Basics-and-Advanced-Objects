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
      for(var j=0;j<title_list.length;i++){
          if(j===1){
             var titleElement=title_list[j];
             for(var k=0;k<titleElement.length;k++){
                var title_id=titleElement[k].id;
                if(titleElement[titleElement[k].id]===01){
                     carName=titleElement[k].name;
                }
             }
          }
      }
  }  
}
return carName;
}
module.exports=task10;
