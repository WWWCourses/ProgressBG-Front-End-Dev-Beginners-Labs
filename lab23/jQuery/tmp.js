function addToUserScores(userName, userScore) {
	userData[0].push(userName);
	userData[1].push(userScore);

	return userScore;
};

function findBestStudent() {
	let userScores = userData[1];

	let maxScore = 0;
	let maxScoreIdx = 0;

	for (let i = 0; i < userScores.length; i++) {
		const score = userScores[i];
		if(score>maxScore){
			maxScore = score;
			maxScoreIdx = i;
		}
	}

	console.log(`The best student is ${userData[0][maxScoreIdx]}`);
}



let userData = [[],[]];

addToUserScores('ada',4);
addToUserScores('pesho',7);
addToUserScores('maria',6);

console.log(userData);

findBestStudent()



// variant 1
// [
// 	[ 'ada', 'pesho', 'maria' ],
// 	[ 4, 5, 2 ]
// ]

// variant 2:
// [
// 	['ada',4],
// 	['pesho',5],
// 	['maria',2]
// ]
//
// variant 3:
// userData =[
// 	{
// 		'name': 'ada',
// 		'score': 4
// 	},
// 	{
// 		'name': 'pesho',
// 		'score': 5
// 	},
// 	{
// 		'name': 'maria',
// 		'score': 2
// 	}
// ]

// hint: sort array of objects by property
function sortByProp(a,b) {
	if (a.score<b.score) {
		return -1;
	}
	if (a.score>b.score) {
		return 1;
	}
	// a must be equal to b
	return 0;
}
userData.sort(sortByProp)