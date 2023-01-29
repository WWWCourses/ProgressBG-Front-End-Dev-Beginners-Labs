console.log(`x before: ${x}`); //unedefined

foo();

var x;
x = 1;

console.log(`x after: ${x}`); // 1

function foo() {
	console.log(`Foo`);
};

let bar = function() {
	console.log(`Bar`);
}


foo()
bar()

// GLOBAL:
// 	x:0x123: undefined
//   foo:0x234: Function foo
//   bar:0x435: undefined





