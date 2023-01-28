// let x = 5;
// console.log(x);
// console.log(userName);


// // RAM:
// 	// Global Scope
// 	// x:0x123: 5


/* -------------------------------- Example 2 ------------------------------- */
// let x = 9;
// function foo() {
// 	let x  = 5;
// 	console.log(`x in foo: ${x}`);
// }

// foo();
// console.log(`x in global: ${x}`);

// // RAM:
// 	// GLOBAL:
// 	// 	x: 0x123: 9
// 	//   foo: 0x124: [function]

// 	// LOCAL 'foo' Scope:
// 	// 	x: 0x981: 5

/* -------------------------------- Example 3 ------------------------------- */
// function foo() {
// 	let x = 5;
// 	console. log(`x in foo: ${x}`);
// 	return x;
// };

// function bar(x) {
// 	console.log(`x in bar: ${x}`);
// };
// let x = 9;

// foo();
// bar(100);

// console.log(`x in global: ${x}`);


// RAM:

	// GLOBAL:
	//   foo: 0x124: [function]
	//   bar: 0x178: [function]
	// 	 x  : 0x123: 9


/* -------------------------------- Example 4 ------------------------------- */
// function foo() {
// 	console. log(`x in foo: ${x}`);
// };

// foo();

// x = 9;

// console.log(`x in global: ${x}`);

/* -------------------------------- Example 5 ------------------------------- */
// function foo(x) {
// 	console. log(`x in foo: ${x}`);
// 	return x**=2; // x = x**2
// };

// function bar(x) {
// 	console. log(`x in bar: ${x}`);
// 	return x**=3;
// }

// let x = 3;

// let res = foo(x)+bar(x);
// console.log(`x in global: ${x}`);

// console.log(`res: ${res}`);

// OUTPUT:
// x in bar: 1
// x in foo: 2
// res: 5

/* -------------------------------- Example 6 ------------------------------- */

function foo(x) {
	x = 1;

	function bar(x) {
		x = 2;
		console.log(`x in bar: ${x}`);
	};

	console.log(`x in foo: ${x}`);
};

let x = 100;

foo();
bar();
console.log(`x in global: ${x}`);


// x in bar: 2
// x in foo: 1
// x in global:100