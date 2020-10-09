var arr = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  {},
  { id: null },
  { id: NaN },
  { id: "undefined" }
];

function task06(arr){
var newObj={};
var prop1;
var prop2;  

var prop=[];  
for(var i=0;i<arr.length;i++){
var value=arr[i]["id"];

prop.push(value);

  
}

prop1=prop.filter(function(x){return ((x!==null)&&(x!==0)&&(x!==undefined)&&(!isNaN(x))&&(x!==""))});  
//var prop11=Object.assign({},prop1);
//console.log(prop1);
console.log(prop11);  
prop2=prop.filter(function(x){return(x===null||isNaN(x)||x===undefined||x===0||x==="undefined")});  
console.log(prop1);
console.log(prop2);
var prop11={};
for(var i=0;i<prop1.length;i++){
    prop11[i]=prop1[i];
} 
var prop111=Object.entries(prop11);
newObj.prop1=prop111;
newObj.prop2=prop2.length;
console.log(newObj); 
return newObj;  
}
module.exports=task06;
//var a=task06(arr);
//console.log(a);
