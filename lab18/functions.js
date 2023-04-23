/* --------------------------- Function Invocation -------------------------- */
// function foo(x,y) {
// 	// let x = 7
// 	// let y = 8
// 	console.log(x,y);
// }

// console.log( foo );

// Function call (invocations)
// foo(2,3)
// foo(4,5)
// foo(2+3, [1,2,3])
// foo(2)
// foo(7,8,9)

/* -------------------------- Function Return Value ------------------------- */
// let sum = function(x,y) {
// 	return x+y;
// }

// 2+3; // 5
// sum(1,2);
// sum(3,4);
// let result = sum(2,3) + sum(4,5);
// console.log( result );
// console.log( sum(5,6) );

// let greet = function(userName) {
// 	console.log(`*`.repeat(30));
// 	console.log(`Hello, ${userName}`);
// 	console.log(`*`.repeat(30));
// 	return 2+2
// 	console.log(`Buy`);
// }

// let res = greet('Maria') + 2;
// // let res = undefined + 2;
// console.log(`res = ${res}`); // 'res = ''


/* -------------------------------- Examples -------------------------------- */
// Task: sum array elements
// let l = [2,3,4,5];
// let sum = 0;
// for (let i = 0; i < l.length; i++) {
// 	sum += l[i]
// }

// console.log(`sum=${sum}`);

// Define function, which takes 1 arrays and returns the sum of array elements
// function sumArrayElements(arr) {
// 	// let arr = [1,2,3,4];
// 	let sum = 0;
// 	for (let i = 0; i < arr.length; i++) {
// 		sum += arr[i]
// 	}

// 	// console.log(`sum=${sum}`);
// 	return sum;
// }


// console.log( sumArrayElements([1,2,3]) );
// console.log( sumArrayElements([4,5]) );

// Task: log the sum of next arrays
// let arr1 = [1,2,3];
// let arr2 = [4,5];

// let sum = sumArrayElements(arr1)+sumArrayElements(arr2);
// console.log(sum);

/* ---------------------------------- Scope --------------------------------- */

// let foo = function() {
// 	let x = 1;
// 	console.log(`x in foo ${x}`);
// }

// function bar() {
// 	let x = 2;
// 	console.log(`x in bar ${x}`);
// }

// let x = 3;

// foo();
// bar();
// console.log(`x in global ${x}`);

// GLOBAL:
// 	foo: 0x345 =function
// 	bar: 0x346 =function
// 	x: 0x123 = 3

// FOO:
// 	x: 0x6545=1


// Example 2

// function bar() {
// 	let x = 2;

// 	function cub(x) {
// 		x = x**3;
// 		console.log(`x in cub ${x}`); //125
// 	}

// 	cub(x);

// 	console.log(`x in bar: ${x}`); // 2
// }

// let x = 1;
// bar();
// console.log(`x in global: ${x}`);

// OUTPUT:
// x in foo
//


/* --------------------------- var vs let vs const -------------------------- */
// let x = 1;

// {
// 	const x = 2
// }

// console.log(`x = ${x}`);



// for (let i = 0; i < 3; i++) {
// 	console.log(`1.${i}`);
// }

// console.log(`2.${i}`); // i is not defin

// let x = 1;
// let x = 5;
// console.log(`x = ${x}`);


/* ------------------------------ CONST vs LET ------------------------------ */
// const pi = 3.1445456565566565;
// function calcArea(r) {
// 	pi = 54;
// 	return (r**2)*pi;
// }

// GLOBAL:
// 	pi: 3.1445456565566565

// console.log( calcArea(1) );
// console.log( calcArea(2) );

// const userData = ['Maria', 34];
// userData[1] = 23;
// console.log( userData ); //  ['Maria', 50]
