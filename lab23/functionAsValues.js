let str = "jdskjfkdsjfds";
let arr = [5];
let x = 5;

let foo = function() {
	console.log(`I'm foo`);
}

let bar = foo;

bar();
foo();


// RAM:
//   x: 0110
//   foo: 01101010100101010101
//   bar: 01101010100101010101