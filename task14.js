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


function task14(objNode){
 
  
  
  



var str="";
for(var property in objNode){

if(typeof objNode[property]==='string'){
  str=str+objNode[property]+"\n";
}


if((objNode[property])&&(typeof objNode[property]==='object')){
 var next=objNode[property];
   
    str=str+task14(next);
  }


}
return str;
}

module.exports=task14;

