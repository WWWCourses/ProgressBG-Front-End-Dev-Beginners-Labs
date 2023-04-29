/* ---------------------- By literals => Not effective ---------------------- */
// let developer1 = {
// 	'firstName': "Ivan",
// 	'skills': ['HTML', 'CSS', 'JS'],
// 	'surName':'Ivanov',
// 	'applyForJob': function() {
// 		console.log(this.firstName);
// 	}
// }

// let developer2 = {
// 	'firstName': "Asen",
// 	'skills': ['Python', 'C++'],
// 	'surName':'Asenov',
// 	'applyForJob': function() {
// 		console.log(this.firstName);
// 	}
// }

// let developer3 = {};
// // add property 'firstName'
// developer3.firstName = 'Maria';
// developer3.skills = ['Rust'];
// developer3.surName = 'Marieva'
// developer3.applyForJob = function() {
// 	console.log(this.firstName);
// }
// console.log( developer3 );


/* --------------------------- By Factory Function -------------------------- */
// function developer(firstName, skills, surName) {
// 	let obj = {};

// 	obj.firstName = firstName;
// 	obj.skills = skills;
// 	obj.surName = surName;
// 	obj.applyForJob = function() {
// 		console.log(this.firstName);
// 	}

// 	return obj
// }

// let developer1 = developer('Ivan',  ['HTML', 'CSS', 'JS'], 'Ivanov');
// // // let developer2 = developerFactory('Asen',  ['HTML', 'CSS', 'JS'], 'Ivanov');
// console.log( developer1 );



/* ------------------------ By "Constructor Function" ----------------------- */
// function Developer(firstName, skills, surName) {
// 	// this = {}
// 	this.firstName = firstName;
// 	this.skills = skills;
// 	this.surName = surName;
// 	// this.applyForJob = function() {
// 	// 	console.log(this.firstName);
// 	// }

// 	// return this
// }
// Developer.prototype.applyForJob = function() {
// 	console.log(this.firstName);
// }

// let developer1 =  new Developer('Ivan',  ['HTML', 'CSS', 'JS'], 'Ivanov');
// developer1.applyForJob()


/* ----------------------------- By Class Syntax ---------------------------- */
class Developer{

	constructor(firstName, skills, surName) {
		// this = {}
		this.firstName = firstName;
		this.skills = skills;
		this.surName = surName;
		// this.applyForJob = function() {
		// 	console.log(this.firstName);
		// }

		// return this
	}

	applyForJob(){
		console.log(this.firstName);
	}
}

let developer1 =  new Developer('Ivan',  ['HTML', 'CSS', 'JS'], 'Ivanov');
developer1.applyForJob()







// Use objects
// let developers = [developer1, developer2]

// for (let i = 0; i < developers.length; i++) {
// 	const developer = developers[i];
// 	console.log(developer.skills);
// }