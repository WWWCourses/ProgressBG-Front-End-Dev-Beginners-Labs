// console.log(`x: ${x}`);
// console.log(`bar: ${bar}`);

foo();
bar();

var x = 1;

function foo() {
	console.log(`I'm foo`);
}

var bar = function () {
	console.log(`I'm bar`);
}



// COMPILE TIME:
// GLOBAL SCOPE:
// x: undefined
// foo: {... code ...}
// bar: undefined