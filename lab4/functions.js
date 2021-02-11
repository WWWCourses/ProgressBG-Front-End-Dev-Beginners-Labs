// foo();
// // bar();


// function foo() {
// 	console.log(`foo`);
// };

// let x = 5;

// const bar = function() {
// 	console.log(`bar`);
// }

// console.log(`1`);


// RAM:
// foo: function
// x: undefined
// bar: undefined

// 'foo'
// error


// const sumLog = new Function('a', 'b', 'console.log(`a + b = ${a+b}`)');
// console.dir(sumLog);

// function mySumLog(a,b) {
// 	console.log(`a + b = ${a+b}`);
// 	console.log(`End`);
// }
// console.dir(mySumLog);



function foo() {
	let x = 1;
	console.log(`x in foo: ${x}`);
}

function bar() {
	x = 9;
	console.log(`x in bar: ${x}`);
}

// x in bar: 9
// x in foo: 1

