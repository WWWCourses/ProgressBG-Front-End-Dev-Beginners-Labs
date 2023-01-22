// Log user name with max score
let userNames = ['Ada', 'Pesho','Maria','Ivan'];
let userScores = [4, 5, 2, 6];

// sub task 1: find max user score index
let maxScore = 0;
let maxIndex = 0;
for (let i = 0; i < userScores.length; i++) {
	let userScore = userScores[i];

	if(userScore>maxScore){
		maxScore = userScore;
		maxIndex = i;
	}
};

// console.log( maxScore, maxIndex );
console.log( `Student with max score is: ${userNames[maxIndex]}`);
