// let userName = 'Ivan';
// userNames.push(userName);


// // TASK: log the name of the student with max score
// let userNames  = ['Ivan', 'Pesho', 'Ada'];
// let userScores = [5,4,6];


// console.log( userNames );
// // subtask1: find index of max score
// let maxScore = userScores[0];
// let maxIndex = 0;

// for (var i = 0; i < userScores.length; i++) {
// 	let element = userScores[i];

// 	if(element>maxScore){
// 		maxScore = element;
// 		maxIndex = i;
// 	}
// }
// console.log( maxScore ); //
// console.log( maxIndex );

// // subtask2: log name with maxIndex
// console.log( userNames[maxIndex]);


// TASK: log the name of the student with max score
let data = [
	['Ivan', 'Pesho', 'Ada'],
	[5,4,6]
];
// let userNames  =data[0];
// let userScores = data[1];

// subtask1: find index of max score
let maxScore = data[1][0];
let maxIndex = 0;

for (var i = 0; i < data[1].length; i++) {
	let element = data[1][i];

	if(element>maxScore){
		maxScore = element;
		maxIndex = i;
	}
}
console.log( maxScore ); //
console.log( maxIndex );

// subtask2: log name with maxIndex
console.log( data[0][maxIndex]);
