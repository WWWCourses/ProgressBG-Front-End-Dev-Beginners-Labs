let student1 = {
    "firstName" : "Pesho",
    "surName" : "Petrov",
    "greet": function(student) {
        console.log(`Hello, I'm ${this.firstName}`);
    }
};

let student2 = {
    "firstName" : "Maria",
    "surName" : "Popova",
    "greet": function(student) {
        console.log(`Hello, I'm ${this.firstName}`);
    }
}

// let greet = function(student) {
//     console.log(`Hello, I'm ${student.firstName}`);

// }
// greet(student1); // HEllo I'm Maria
// greet(student2); // HEllo I'm Pesho

student1.greet();
student2.greet();