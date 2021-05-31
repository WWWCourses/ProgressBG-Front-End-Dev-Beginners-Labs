// TASK: information for N students:
// Student:
// name: string
// address: {
// 	country: string
// 	town:  string
// }
// score: number

// Log in console the student name with highest score

let students = [
	{
		name:"Pesho",
		addres:{
			country: "Bulgaria",
			town: "Plovdiv"
		},
		score:5
	},
	{
		name:"Maria",
		addres:{
			country: "UK",
			town: "London"
		},
		score:6
	},
	{
		name:"Asen",
		addres:{
			country: "Bulgaria",
			town: "Sofia"
		},
		score:6
	}
];



function getBestStudent(students) {
	let maxScore = 0;
	let maxIndex;

	for (let i = 0; i < students.length; i++) {
		const student = students[i];

		// console.log( student.score );
		if( student.score > maxScore){
			maxScore = student.score;
			maxIndex = i;
		}
	}

	// console.log(`maxIndex: ${maxIndex}`);

	return students[maxIndex];


	// return bestStudent;
}

let bestStudent = getBestStudent(students);

console.log( bestStudent );

function greet(student) {
	console.log(`Hello, I'm ${student.name}, ${student.addres.country}, ${student.score}`);
}

for (let i = 0; i < students.length; i++) {
	const student = students[i];
	greet(student);
}