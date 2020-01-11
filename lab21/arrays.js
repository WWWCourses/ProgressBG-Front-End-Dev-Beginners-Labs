// let studentName1 = "Pesho";
// let studentScore1 = 4;
// let studentName2 = "Maria";
// let studentScore2 = 5;

// studentName1 = "Petar";
// console.log( studentName1 );

// // let str = "";
// // define array:
// let student1 = ["Pesho",4];
// let student2 = ["Maria",5];

// // access array elements:
// student1[0] = "Petar";
// console.log( student1[0] );

// // access the whole array:
// console.log( student1 );

// examples:
// let arr = [ , , 3];
// console.log( arr );

// let arr = [5, 4, 6];
// // console.log( arr );
// console.log(typeof(arr));

// arr[2] = 8;
// console.log( arr );

// arr[-1] = 4;
// console.log( arr );



// let obj = {
//     'math': 5,
//     'chemistry': 4,
//     'phisics': 6
// }
// console.log( obj );
// console.log(typeof(obj));
// obj['math'] = 8;

// console.log( obj );

// represent data as array:
// let studentName1 = "Pesho";
// let studentScore1 = 4;
// let studentName2 = "Maria";
let studentScore2 = 5;

// define array:
let studentNames = ["Pesho","Maria"];
let studentScores = [5,4];

let newStudentName = "Ada";
// add element to the end:
// studentNames[studentNames.length] = newStudentName;
studentNames.push(newStudentName);

// add element to begining:
studentNames.unshift("George");
console.log(studentNames);

console.log(`length: ${studentNames.length}`);
console.log(`alabla: ${studentNames.alabala}`);

studentNames.length = 0;
console.log(studentNames);










