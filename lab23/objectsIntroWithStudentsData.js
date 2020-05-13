// Представяме информация за множество студент:

// name: name of student
// year: years of student
// skills:  array of skills

// Въведи информация за
// student 1:
	// Maria
	// 23,
	// ['CSS', HTML]

// student2:
	// Pesho,
	// 31,
	// ['JS', 'Python', 'Java']


// structure data with Arrays
// let students =  [
// 	['Maria', 23, ['CSS', 'HTML']],
// 	['Asen', 43, ['HTML']],
// 	['Pesho', 31, ['JS', 'Python', 'Java']]
// ]


// function greet(name, years) {
// 	console.log(`Hello, I'm ${name}, year: ${years}.`);
// }

// function showSkills(name, skills){
// }



// for (let i = 0; i < students.length; i++) {
// 	const student = students[i];
// 	greet( student[0], student[1] )
// }



// structure data with Objects:
// let students = [
// 	{
// 		'name': 'Maria',
// 		'years': 23,
// 		'skils': ['CSS', 'HTML'],
// 		'greet': function () {
// 			console.log(`Hello, I'm ${this.name}, year: ${this.years}.`);
// 		}
// 	},
// 	{
// 		'name': 'Pesho',
// 		'years': 43,
// 		'skils':['JS', 'Python', 'Java'],
// 		'greet': function () {
// 			console.log(`Hello, I'm ${this.name}, year: ${this.years}.`);
// 		}
// 	}
// ]

function developerFactory(name, years, skills) {
	return {
		'name': name,
		'years': years,
		'skils': skills,
	}
}


let students = [
	developerFactory('Maria', 23, ['CSS', 'HTML']),
	developerFactory('Pesho', 43,['JS', 'Python', 'Java'])
]

let maria = developerFactory('Maria', 23, ['CSS', 'HTML']);
let pesho = developerFactory('Pesho', 43,['JS', 'Python', 'Java']);
















