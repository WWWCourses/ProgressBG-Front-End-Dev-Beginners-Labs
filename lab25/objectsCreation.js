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





function studentsFactory(X,Y,Z,W) {
    return {
        "firstName": X,
        "lastName": Y,
        "math": Z,
        "physics": W
    }
}

class Student{
    firstName,
    lastName,

}
let student1 = new Student("Ivan", "Ivanov")




let student1 = studentsFactory("Ivan", "Ivanov", 5, 4);
let student21 = studentsFactory("Maria", "Petrova", 3, 5);

console.log(student1); //  X
console.log(student21);
