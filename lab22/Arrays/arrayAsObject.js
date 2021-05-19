let students = ["Asen","Pesho"];

let studentName = "Maria";

// append element to the END of array
// students[students.length] = "Maria";
students.push(studentName);

// append element to the Beginning of array
// DON NOT DO THIS:
// students[2] = students[1];
// students[1] = students[0];
// students[0] = "Maria"

// DO THIS:
students.unshift(studentName);
console.log(students); // ["Asen", "Pesho","Maria"]
console.log(`students length: ${students.length}`);

