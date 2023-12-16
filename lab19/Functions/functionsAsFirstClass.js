/* -------------------- Function are First Class Citizens ------------------- */

// Anonymous functions
// const foo = function() {
// 	console.log(`Foo`);
// }

// foo()

///// Example:

// let arr = [
// 	function() {
// 		console.log(`1`);
// 	},
// 	function() {
// 		console.log(`2`);
// 	}
// ];

// // console.log( arr.length );//2

// arr[0]();
// arr[1]();

// Example
// function foo() {
// 	console.log(`Foo`);
// };

// let bar = foo;

// bar();


// Example
// function foo(x) {
// 	x()
// };

// let bar = function () {
// 	console.log(`Bar`);
// };

// foo( bar );

// Example
// function foo(x) {
// 	x()
// };

// foo( function () {
// 	console.log(`Bar`);
// } );


// Example

// function caller(callback){
// 	console.log("caller will call the callback:")
// 	callback();
// }

// function callback1(){
// 	console.log("I'm the callback1 function!")
// }

// function callback2(){
// 	console.log("I'm the callback2 function!")
// }

// caller(callback1)
// caller(callback2)


// Example
// function foo(f) {
// 	console.log(f);
// 	f()
// }

// let bar = function() {
// 	console.log(`Hi`);
// }

// foo( bar() );



/* ------------------------ Function as return value ------------------------ */
// let foo = function(){
// 	return function() {
// 		console.log(`Bar`);
// 	}
// };

// let res = foo();
// res();
// // console.log(res);

// foo()();




