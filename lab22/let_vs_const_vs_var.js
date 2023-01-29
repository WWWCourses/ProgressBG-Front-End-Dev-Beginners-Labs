// "use strict"
// function foo() {
// 	// local scope
// 	var x = 9;
// }


// let y = 10;

// {
// 	// block scope
// 	var x = 1;
// 	let y = 2;
// 	const z = 3;

// 	console.log(`x: ${x}`);
// 	console.log(`y: ${y}`);
// }

// console.log(`y: ${y}`);

// for (let i = 0; i < 3; i++) {
// 	console.log(`---i: ${i}`);
// };


// console.log(`i: ${i}`);


// // 0, 1, 2, 2
// // 0, 1, 2, 3

/* ----------------------------- Scopes example ----------------------------- */
// function foo(x) {
// 	x = 1;
// };

// let x = 2;

// {
// 	let x = 3;
// }

// foo();
// console.log(`x: ${x}`); // 3 | 2 |

// GLOBAL:
// 	foo: 0x123: function
// 	  x: 0x123: 2

// BLOCK1:
// 	x: 0x765: 3

// FOO:
// 	x:0x987: 1


/* --------------------------- Redeclaring example -------------------------- */
// function foo() {
// 	var x = 1;
// };

// foo();

// const x = 9;
// console.log(`x: ${x}`);

// let x = 55;

// GLOBAL:
	// foo: 0x123: function
	//   x: 0x124: 9

// FOO:
// 	x: 0x345: 1

/* ------------------------------ Let vs Const ------------------------------ */

// let x = 1;
// x = 9; // re-define x

// const PI = 3.1415887482;
// PI=3; // Error

// const x; // Error
// x = 9;

// const x = 1;
// x = 9;

// const x = [1];
// x[0]=2;


// console.log(x); // [2]


// RAM:
// 	x: 0x123: begging of array
//  x[0]: 0x345: 1
