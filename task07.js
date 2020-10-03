var personnel = [
  {
    id: 5,
    name: "Luke Skywalker",
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true
  },
  {
    id: 82,
    name: "Sabine Wren",
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false
  }
];

function task07(personnel){
var total_score=[];    
for(var i=0;i<personnel.length;i++){
var checkForceUser=personnel[i].isForceUser;
if(checkForceUser===true){
var totalScore=personnel[i].pilotingScore+personnel[i].shootingScore;
total_score.push(totalScore);
}

}
return total_score;
}
module.exports=task07;
