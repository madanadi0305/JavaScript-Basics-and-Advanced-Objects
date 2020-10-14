/*var data = {
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
};*/

var str="";
function task14(data){
 
  var str1=start(data);
  
  return str1;
}
function start(objNode){
var objContent;

for(var property in objNode){
if(objNode.hasOwnProperty(property)){
if(typeof objNode[property]==='string'){
  str=str+objNode[property]+"\n";
}


if(typeof objNode[property]==='object'){
 var next=objNode[property];
   
     start(next);
  }
}

}
return str;
}

module.exports=task14;

