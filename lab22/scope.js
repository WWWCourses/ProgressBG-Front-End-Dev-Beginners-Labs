/* -------------------------- Local Scope Sxamples -------------------------- */
// let x = 5;

// function bar() {
// 	console.log(`bar`);
// 	let x = 999;

// 	function foo() {
// 		console.log(`x in foo: ${x}`);
// 	};

// 	foo();

// 	console.log(`x in bar: ${x}`);
// }

// bar();

// console.log(`x in main: ${x}`);


// GLOBAL:
// 	x: 0x123: 5
//   bar: 0x345: function bar

// BAR:
// 	foo: 0x234: function foo
//    x: 0x123: 999

// FOO:



// 'bar'
// x in foo: 10
// x in bar: 10  | 5
// x in main: 5




// let x = 1;

// function foo() {
// 	x = 999;
// 	y = 5;
// };
// foo();

// console.log(`x in main: ${x}`);
// console.log(`y in main: ${y}`);

// GLOBAL:
// 	x: 999
//  y: 5

// FOO:


/* ------------------------------- Block Scope ------------------------------ */
// {
// 	var x = 1;
// 	let y = 2;
// 	const z = 3;

// 	console.log(`z: ${z}`); // 3
// };


// console.log(`x: ${x}`); // 1
// // console.log(`y: ${y}`); // Error:
// console.log(`z: ${z}`); // Error

// GLOBAL:
// 	x:0x233:1

// BLOCK1:
// 	y:0x234: 2
// 	z:0x235: 3


// for (var i = 0; i < 3; i++) {
// 	console.log(`i in for: ${i}`);
// };

// console.log(`i in main: ${i}`); // 0 | 2 | 1


// var userName='Ada';


// var userName ='Pesho';

// console.log(userName);


// // GLOBAL:
// // 	userName:0x123: 'Ada' !!!


// const PI = 3.1416783877538;
// PI = 5;
// console.log(PI);

// const ARR = [1];
// ARR[0] = 9;
// console.log(ARR);


// GLOBAL:
// 	   ARR: 0x123: 0x456 ...
// 	ARR[0]: 0x456: 1


// const sum = function(x,y) {
// 	console.log(x+y);
// };

// sum = 2+3;

// GLOBAL:
// 	sum: 5
