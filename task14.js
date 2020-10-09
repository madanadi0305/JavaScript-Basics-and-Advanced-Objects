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
var string1="";

string1=string1+root+"\n";
var contents=data.contents;



for(var i=0;i<contents.length;i++){

var elem=contents[i];

var keys=Object.keys(elem);
for(var i=0;i<keys.length;i++){

   var key=keys[i];
  if(key==='name'){
    
    string1+elem[key]+"\n";
 
  }
  
 if(key==='contents'){
   var innerElem=elem[key];
  var innerKeys=Object.keys(innerElem);
  string1=string1+innerElem[innerKeys].name+"\n"+string1+innerElem[innerKeys].contents[0]+"\n";
 }
}

}
var nextContent=contents[1];
var keysNextContent=Object.keys(nextContent);
for(var i=0;i<keysNextContent.length;i++){
var keyNext=keysNextContent[i];
if(keyNext==='name'){
  string1=string1+nextContent[keyNext]+"\n";
}
if(keyNext==='contents'){
  var contentElem=nextContent[keyNext];
  var contentElemKeys=Object.keys(contentElem);
  string1=string1+contentElem[contentElemKeys].name+"\n";

 var contentElem2=contentElem[contentElemKeys].contents;
 var contentElemKeys2=Object.keys(contentElem2);
 string1=string1+contentElem2[contentElemKeys2].name+"\n";
 string1=string1+contentElem2[contentElemKeys2].contents+"\n";
   
}

}


return string1;

}
module.exports=task14;

