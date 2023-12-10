//  Functions in Math (in JS => pure functions )
// y = cub(x)

// X:   Y:
// 1    1
// 2    8
// 3    27
/* ---------------------------- Function Cretion ---------------------------- */
// Function Declaration:
// function greetUser(){
// 	console.log(`*`.repeat(30));
// 	console.log(`Hello, ${userName}!`);
// 	console.log(`*`.repeat(30));
// };

// Function Expresstion
// let greetUser = function(){
// 	console.log(`*`.repeat(30));
// 	console.log(`Hello, ${userName}!`);
// 	console.log(`*`.repeat(30));
// };

// let userName = 'Ada';

// // RAM:
// // 	greetUser:0x1234:01010100101010101010110
// // 	userName: 04322: 01010100101010101

// greetUser();

// userName = 'Pesho'
// greetUser();

/* --------------------------- Function Parameters -------------------------- */
// function calcRectangleArea(a,b) {
// 	//e.log( let a = 5, b = 5;
// 	let area = a*b
// 	console.log(`Area of rectangle ${a}, ${b} = ${area}`);
// }


// calcRectangleArea(10, 5);
// // calcRectangleArea(5, 5);
// // calcRectangleArea(2+3,1+2);


// // Function Expresstion
// let greetUser = function(userName){
// 	// let userName = 'Pesho'
// 	console.log(`*`.repeat(30));
// 	console.log(`Hello, ${userName}!`);
// 	console.log(`*`.repeat(30));
// };

// greetUser('Pesho');
// greetUser('Ada');

// function foo(a,b){
// 	// let a; let b
// 	// a = 1;
// 	console.log(a);
// 	console.log(b);
// }


// foo(1);

// function bar(a) {
// 	console.log(a);
// };

// bar(1,2);


// function calcRectangleArea(a,b) {
// 	let area = a*b
// 	console.log(`Area of rectangle ${a}, ${b} = ${area}`);
// }


// calcRectangleArea(1);


/* ---------------------------- Return Statement ---------------------------- */
// function foo() {
// 	console.log(`Start`);
// 	return 2+2;
// 	console.log(`End`);
// }
// let value = foo();
// console.log(value); //4

// None Pure Function=> log is side effect
// function sum(num1, num2) {
// 	let totalSum=num1+num2;
// 	console.tlog(toalSum);
// 	return totalSum
// }

// Pure Functions
function sum(num1, num2) {
	let totalSum=num1+num2;
	return totalSum
}
function cub(num1) {
	let result = num1**3;
	return result;
}

// let x = sum(2,3) + cub(2);
// console.log(`x = ${x}`);

// CONSOLE
// 5
// 8
// x = NaN

// 1. A function are values
// 2. Parameters are variables
// 3. Arguments are values
// 4. A function call value is return ...| undefined








