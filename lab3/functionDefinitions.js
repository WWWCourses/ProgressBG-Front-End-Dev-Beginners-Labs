// variable x declaration
let x;
// variable y definition:
let y = 3;


// function foo - definition by declaration
function foo(x) {
	console.log( x ** 10 );
};


// function bar - definition by anonymous function expression
const bar = function (x) {
	console.log( x ** 2);
};

// function baz - definition by named function expression
const baz = function baz(x) {
	console.log( x**2);
};

bar(2);
baz(2);
foo(2);