var arr = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  {},
  { id: null },
  { id: NaN },
  {id:'undefined'},

  {id:45},
  {id:122}
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

prop1=prop.filter(function(x){return ((x!==null)&&(x!==0)&&(x!==undefined)&&(!isNaN(x))&&(x!=="undefined")||(x!=='undefined'))});  

prop2=prop.filter(function(x){return(x===null||isNaN(x)||x===undefined||x===0)});  

console.log(prop1);  
console.log(prop2);  
newObj.prop1=prop1;
newObj.prop2=prop2;

return newObj;  
}

module.exports=task06;
