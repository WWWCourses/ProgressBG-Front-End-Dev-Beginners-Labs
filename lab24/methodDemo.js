function Student(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;

	// we can define methods here, but its a memory waste
	this.greet = function () {
		console.log(`${this.firstName}`);
	}
}


// ADVANCED :this is the proper way to define methods
// Student.prototype.greet = function () {
// 	console.log(`${this.firstName}`);
// }



let student1 = new Student("Pesho", "Petrov");
let student2 = new Student("Maria", "Ivanova");


student1.greet();
student2.greet();