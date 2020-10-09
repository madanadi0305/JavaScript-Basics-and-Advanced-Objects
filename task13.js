function task13(obj1){
var obj1={
pyramid:function(x,y){
var n=parseInt(x);
var string=""; 
for(var i=1;i<=n;i++){
for(var j=1;j<=(n-i);j++){
string=string+" ";
}
for(var j=1;j<=2*i-1;j++){
  string=string+y;
}


string=string+"\n";

}

return string;

},

diamond:function(x,y){
var string="";
var n=parseInt(x);
for(var i=1;i<=n;i++){
for(var j=1;j<=spaces;j++){

  string=string+" ";
}
spaces=spaces-1;
for(var j=1;j<=i;j++){

  string=string+y+" ";
}

string=string+"\n";
}

spaces=0;
for(var i=n;i>=1;i--){
for(var j=1;j<=spaces;j++){
  string=string+" ";
}
spaces=spaces+1;
for(var j=1;j<=i;j++){

  string=string+y+" ";
}


  string=string+"\n";
}

return string;
}
};

return obj1;
}

module.exports=task13;
