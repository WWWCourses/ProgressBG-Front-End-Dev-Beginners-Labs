function foo() {
	var x = 1;
	// console.log(`foo() Scope start`);
	console.log(`x in foo: ${x}`);
	// console.log(`foo() Scope ends`);
}
function bar() {
	var x = 2;
	// console.log(`bar() Scope start`);
	console.log(`x in bar: ${x}`);
	// console.log(`bar() Scope ends`);
}

var x = 999;
foo();
bar();

console.log(`x in main: ${x}`);

// Compile time:
// RAM:
// 	Global Scope:
// 		(x=1234): 999

	// Foo Scope:
	// 	(x:1238): 1

	// Bar Scope:
	// (x:1239): 2

// 1238: free
// 1239: free

