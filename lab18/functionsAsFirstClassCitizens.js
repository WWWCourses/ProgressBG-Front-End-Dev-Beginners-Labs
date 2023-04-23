/* -------------------- functions as first-class citizens ------------------- */
// let x = 3;
// let y = function() {
// 	console.log(`hi....`);
// }

// y();


// function in array
// function foo() {
// 	console.log(`Foo`);
// };

// let arr = [ [1,2],  foo ,];

// arr[1]()

/* -------------------------- Function as argument -------------------------- */
// function foo(x) {
// 	console.log(`Foo`);
// 	x();
// 	console.log(`Foo end`);
// }

// function bar(x) {
// 	console.log(`Bar`);
// }

// foo( bar );


// Example
function calculate(f,x,y) {
	// let f = logSum; x = 1, y = 2
	return f(x,y)
}

// function calcSum(x,y) {
// 	// console.log(`x+y=${x+y}`);
// 	return x+y
// }
// function logProduct(x,y) {
// 	// console.log(`x*y=${x*y}`);
// 	return x*y
// }

console.log( calculate( function(x,y){
	return x+y
}, 1, 2) );

console.log( calculate(function(x,y) {
	return x*y
}, 1, 2) );

// x+y=3
// res: 3


