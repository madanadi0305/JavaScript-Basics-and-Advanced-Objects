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

function task08(obj){
var result=[];
for(var i=0;i<obj.length;i++){
//Access the 3rd object
if(i==2){
var title_list=obj[i].title;
for(var i=0;i<title_list.length;i++){

    result.push(title_list[i]);
}
}

}
return result;
}
module.exports=task08;
