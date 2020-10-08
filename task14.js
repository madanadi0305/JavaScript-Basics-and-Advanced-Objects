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

function task14(data){
var directory=[];
var root=data.name;
var val;
directory.push(root);

var contents=data.contents;
//console.log(contents[1]);


for(var i=0;i<contents.length;i++){

var elem=contents[i];
//console.log(elem);
var keys=Object.keys(elem);
for(var i=0;i<keys.length;i++){

   var key=keys[i];
  if(key==='name'){
    
    directory.push(elem[key]);
  }
  
 if(key==='contents'){
   var innerElem=elem[key];
  var innerKeys=Object.keys(innerElem);
  directory.push(innerElem[innerKeys].name);
  directory.push(innerElem[innerKeys].contents[0]);
 }
}
//elem=contents[i+1];
}
var nextContent=contents[1];
var keysNextContent=Object.keys(nextContent);
for(var i=0;i<keysNextContent.length;i++){
var keyNext=keysNextContent[i];
if(keyNext==='name'){
  directory.push(nextContent[keyNext]);
}
if(keyNext==='contents'){
  var contentElem=nextContent[keyNext];
  var contentElemKeys=Object.keys(contentElem);
  directory.push(contentElem[contentElemKeys].name);
 var contentElem2=contentElem[contentElemKeys].contents;
 var contentElemKeys2=Object.keys(contentElem2);
 directory.push(contentElem2[contentElemKeys2].name);
 directory.push(contentElem2[contentElemKeys2].contents);
   
}

}

var string1="";
for(var i=0;i<directory.length;i++){

string1=string1+directory[i].toString()+"\n";
}
return string1;

}
module.exports=task14;

