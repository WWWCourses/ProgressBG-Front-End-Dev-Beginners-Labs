// const foo = function () {
// 	console.log(`Foo`);
// 	return 5;
// };

// let x = 5;


/* ------------------------ Function as array element ----------------------- */
// const arr = [2+2, 3*3];
// console.log( arr ); // [4,9]

// const arr = [
// 	function () {
// 		console.log(`1`);
// 	},
// 	2,
// 	function() {
// 		console.log(`3`);
// 	},
// 	[1,2,3]
// ];

// console.log( arr.length ); // 4

// arr[0]();
// arr[2]();


// let foo = function () {
// 	console.log(`1`);
// }

// foo();




/* ------------------- Функция като стойност на параметър ------------------- */
// let foo = function() {
// 	console.log("I'm function");
// };

// function caller(f) {
// 	console.log( f );
// 	f();
// };

// caller( foo );
// caller( function () {
// 	console.log("I'm another function");
// });

// caller( foo() );
// caller( undefined );


/* ------------------------ Функция като return value ----------------------- */
function bar() {
	console.log(`I'm bar`);
}

function foo() {
	return bar;
}

foo()();

