var data = {
  name: "root",
  contents: [
    {
      name: "A",
      contents: [
        {
          name: "fileA1",
          contents: ["Hello!"]
        }
      ]
    },
    {
      name: "B",
      contents: [
        {
          name: "dirB1",
          contents: [
            {
              name: "fileB1.1",
              contents: ["Hello!"]
            }
          ]
        }
      ]
    }
  ]
};
var str="";

function task14(data){
  var str2=start(data);
  return str2;
}
function start(objNode){
var objContent;
if(objNode.name){
  str=str+objNode.name+"\n";
}


if(typeof objNode.contents==='object'){
  objNode.contents.forEach(function(next){
    
   
   if(next.contents){
   //  str=str+objContent.contents+"\n";
  
   objContent=next.contents;
  
   }
   
     start(next);
  

  });

  
   str=str+objContent+"\n";
  
 
}

var array=str.split("\n");
var array1=[];
//console.log(array);
array.forEach(function(elem){
if((elem!==" ") && (elem!=='undefined') && (elem!=="[object Object]")){
  array1.push(elem);
  array1.push("\n");
}

});
var str1=array1.join("");
return str1;



}

module.exports=task14;

