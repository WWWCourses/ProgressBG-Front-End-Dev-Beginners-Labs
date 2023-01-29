// let foo = function() {
// 	console.log(`hi`);
// };

// foo();



// let arr = [
// 	function () {
// 		console.log(`1`);
// 	},
// 	function () {
// 		console.log(`2`);
// 	},
// 	[1,2,3],
// 	5
// ];

// console.log( arr.length ); // 4

// arr[0]();
// arr[1]();

// console.log( arr[0] );
// console.log( arr[0]() );
// 1
// undefined

// let arr = [
// 	function () {
// 		console.log(`1`);
// 	},
// 	function () {
// 		console.log(`2`);
// 	},
// 	function () {
// 		console.log(`3`);
// 	}
// ];

// for (let i = 0; i < arr.length; i++) {
// 	const foo = arr[i];
// 	console.log( foo() );
// }

// 1
// undefined

/* ---------------------- Function as Function Argument --------------------- */

// let foo = 'function foo(){console.log(444)}'
// foo();



// function foo(x) {
// 	// let x = bar
// 	console.log(`x: ${x}`);
// 	x();

// };

// function bar() {
// 	console.log(`Bar`);
// };

// foo( bar );


// x: Function Bar
// 'Bar'


// function sum(x,y) {
// 	return x+y
// }

// function div(x,y) {
// 	return x/y
// }
// function mult(x,y) {
// 	return x*y
// }

// function calc(f,x,y) {
// 	console.log( f(x,y) );
// }

// calc( sum, 2, 3 );
// calc( div, 2, 3 );
// calc( mult, 2, 3 );



// function caller(f) {
// 	console.log( f() );
// }

// caller( function(){
// 	return 'Anon'
// } );


/* ------------------------ Function as Return Value ------------------------ */
function foo() {
	return function () {
		console.log(`Hi`);
	}
}

let res = foo()();
// let tmp = foo();
// let res = tmp();

console.log( res );

// Hi
// undefined











