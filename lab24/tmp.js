let students = ["Ivan", "Pesho", "Maria"];
let scores = [8, 3, 6];

let maxScore = 0;
let index = 0;

function getHighestScoreIndex(scores){
  for(let i = 0; i < scores.length; i++ ){
    if(scores[i] >= maxScore){
		maxScore=scores[i];
		index = i;
    }
  }
  return (index);
}


// maxScore = 0
// i = 0, index=0
// i=1, index=1
// i=2, index=2


let res = getHighestScoreIndex(scores);
console.log(res);//0
