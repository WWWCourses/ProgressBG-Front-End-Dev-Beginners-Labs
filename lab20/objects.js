/* ------------------------- Square bracket notation ------------------------ */
// let obj = {
// 	a:1,
// 	b:2
// }

// let a = 'a';

// // RAM:
// // 	obj: Object,
// // 			obj.a: 1,
// // 			obj.b: 2
// // 	  a:'a'

// console.log( obj.a )
// console.log( obj['a'] );

// console.log( obj[a] );


// Examples:

// const prices = {
// 	'apples': 2.50,
// 	'oranges': 3.45,
// 	'bananas': 2.80
// }

// // името на пропъртито, което искаме да достъпим е дадено в променлива:
// const fruitName = 'apples';
// console.log(prices[fruitName]);


/* ------------------------------- About this ------------------------------- */
// let student1 = {
//     name: 'Pesho',
//     age: 23,
//     address: { town: 'Sofia', country: 'BG' },
//     skills: [ 'JS', 'Python' ],
// 	greet: function(student) {
// 		console.log(`Hi, I'm ${this.name} from ${this.address.town}`);
// 	}
// };

// student1.greet();



/* ------------------------- Create students example ------------------------ */
// function createStudent() {
// 	let name = 'Pesho';
// 	let age = 23;
// 	let town = 'Sofia';
// 	let country = 'BG';
// 	let skills = ['JS','Python'];

// 	let student = {};
// 	student.name = name;
// 	student.age = age;
// 	student.address = {
// 		town:town,
// 		country:country
// 	};
// 	student.skills = skills;
// 	student.greet = function(student) {
// 		console.log(`Hi, I'm ${this.name} from ${this.address.town}`);
// 	};

// 	return student;
// };

// let students = [];
// for (let i = 0; i < 3; i++) {
// 	let student = createStudent();
// 	students.push(student);
// }

// console.log( students );
// let studentsLength = students.length-1;

// // TASK: call greet() on last student:
// // greet( students[studentsLength-1] )
// students[studentsLength-1].greet()





