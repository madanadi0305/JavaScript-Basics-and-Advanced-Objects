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
var prop1=[];
var prop2=[];
var prop=[];
var newObj={};
for(var i=0;i<arr.length;i++){
prop.push(arr[i]);

}
prop.forEach(function(elem){
var key=Object.keys(elem);    
var x=elem[key];
if((x!==null)&&(x!==0)&&(x!==undefined)&&(!isNaN(x))){
prop1.push(elem);
}
else{
    prop2.push(elem);
}


});
newObj.prop1=prop1;
newObj.prop2=prop2.length;
return newObj;
}

module.export=task06;
