ob1 = {
  steps: 4,
  ability: [1, 3]
};

function task16(ob1){
var level=ob1.steps;
var ability_array=ob1.ability;
var NoOfWays=countNoOfWays(level,ability_array);
return NoOfWays;
}

const countNoOfWays=(level,ability)=>{
var total=0;
if(level===0||level===1){
    return 1;
}
for(var i=0;i<ability.length;i++){
if((level-ability[i])>=0){
total=total+countNoOfWays((level-ability[i]),ability);

}

}
  return total;  
};

module.exports=task16;
