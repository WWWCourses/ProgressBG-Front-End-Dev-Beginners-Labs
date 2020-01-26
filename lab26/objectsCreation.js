// let student1 = ["Ivan", "Ivanov", 5, 4, ];
// let student21= ["Petyr", "Petrov", 3, 6];


// student1 = {
//     "firstName":"Ivan",
//     "lastName":"Ivanov",
//     "math":5,
//     "physics":4
// }


// let student1 = {};
// student1["firstName"] = "Ivan";
// student1.firstName = "Ivan";
// student1.math = 5;
// console.log( student1 );

// let arr = [];
// arr[0] = "a";


// student21 = {
//     "firstName":"Maria",
//     "lastName":"Petrova",
//     "math":3,
//     "physics":5
// }

// console.log( student21.lastName);
// console.log( student1.lastName);





function studentsFactory(firstName,lastName,mathScore,physicsScore) {
    let obj = {};

    obj.firstName = firstName;
    obj.lastName = lastName;
    obj.math = mathScore;
    obj.physics = physicsScore;

    obj.greet  = function() {
        console.log(`Hi, I'm ${this.firstName}`);
    };

    return obj;
}

function Student(firstName,lastName,mathScore,physicsScore) {
    // let this = {}

    this.firstName = firstName;
    this.lastName = lastName;
    this.math = mathScore;
    this.physics = physicsScore;

    this.greet  = function() {
        console.log(`Hi, I'm ${this.firstName}`);
    };

    // return this;
}



let student1 = new Student("Ivan", "Ivanov", 5, 4);
let student3 = new Student("Asen", "Asenov", 4, 6);
let student21 = new Student("Maria", "Petrova", 3, 5);


console.log( student1 );

// let student3 = studentsFactory("Asen", "Asenov", 4, 6);
// let student21 = studentsFactory("Maria", "Petrova", 3, 5);



// let students = [student1, student3, student21];

// for (let i = 0; i < students.length; i++) {
//     // console.log( students[i].firstName);
//     students[i].greet();

// }

