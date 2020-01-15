// let student1 = {
//     "firstName" : "Pesho",
//     "surName" : "Petrov"
// }

// let student2 = {
//     "firstName" : "Maria",
//     "surName" : "Popova"
// }


// create objects with factory function:
// let createStudent = function(firstName, surName) {
//     let obj = {};

//     obj.firstName = firstName;
//     obj.surName = surName;

//     return obj;
// // }
// let student1 = createStudent("Maria", "Popova");
// let student2 = createStudent("Pesho", "Petrov");


// create objects with "constructor":

function Student(firstName, surName) {
    this.firstName = firstName;
    this.surName = surName;
}

let student1 = Student("Maria", "Popova");
let student2 = new Student("Pesho", "Petrov");

console.log(student1);
console.log(student2);
