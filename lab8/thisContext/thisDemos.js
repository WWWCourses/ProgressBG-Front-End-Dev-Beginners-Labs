console.dir(this); // window

function foo() {
	console.dir(`this in foo:`);
	this.Math = 1;
	console.dir(this); // ?
}
const obj = {
	baz: function() {
		console.dir(`this in baz method:`);
		console.dir(this); // ?
	},
	aaa:foo
}


// foo();// this = window

obj.baz();// this = obj

obj.aaa();// this = obj

console.log( Math.random());
