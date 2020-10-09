function task12(stringManipulation){
var stringManipulation={    
up:function(string){
    return string.toUpperCase();
    
},
low:function(string){
return string.toLowerCase();

},
len:function(string){
    return string.length;
},
sta:function(string){
var str1= string.split("");
return str1;
}
};

}
module.exports=task12;
