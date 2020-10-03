var library = [
    {
        title: "",
        author: "",
        readingStatus:""
    },
    {
        title:"" ,
        author:"" ,
        readingStatus:""
    },
    ];

    function task05(library){
     var true_array=[];
     var false_array=[];
     var resultObj={};
     for(var i=0;i<library.length;i++){
     var readingStatus=library[i].readingStatus;
     if(readingStatus===true){
  
     true_array.push(library[i]);

     }
     else{
         false_array.push(library[i]);
         
     }
     }
     resultObj.prop1=true_array;
     resultObj.prop2=false_array;
     return resultObj;
    }
    module.exports=task05;
