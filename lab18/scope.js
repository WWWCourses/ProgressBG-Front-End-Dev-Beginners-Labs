// function foo() {
// 	let x = 1;
// 	console.log(`x in foo: ${x}`); //1
// }

// let x = 9;

// foo();
// console.log(`x in main: ${x}`);


// // Global:
// // 	foo: 0x123
// // 	  x: 0x344

// // Foo Scope:
// // 	 x: 0x876


// // RAM:
// // 	0x123: [function foo]
// // 	0x344: 9
// // 	0x876: 1


/* -------------------------------- Example 1 ------------------------------- */
// function foo() {
// 	let x = 1;
// 	console.log(`x in foo: ${x}`); //1
// };
// foo();
// console.log(`x in main: ${x}`);

// Global:
// 	foo:

/* -------------------------------- Example 2 ------------------------------- */
// function foo() {
// 	x = 1;
// 	console.log(`x in foo: ${x}`); //1
// };

// function bar() {
// 	x = 2;
// 	console.log(`x in bar: ${x}`); //1
// }

// var x = 9;
// foo();
// bar();
// console.log(`x in main: ${x}`);


// Global:
// 	x = 2

/* -------------------------------- Example 3 ------------------------------- */
// function foo() {
// 	x = 2;
// 	console.log(`x in foo: ${x}`);
// };

// let x = 2;
// foo();
// console.log(`x in main: ${x}`);

// Global:
// 	foo: 0x123
// 	  x: 0x345

// Foo Scope:


// RAM:
// 	0x123: function
// 	0x345: 2





