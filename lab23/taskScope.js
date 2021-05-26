var x = 1;

function foo(x) {

	x++;
	console.log(`x in foo: ${x}`); // 3

	function bar(y) {
		y++;
		console.log(`y in bar: ${y}`);
	}

	bar(3)
	console.log( `y in foo: ${y}` );
}

foo(2);
console.log(`x in main: ${x}`);

// x in foo: 3
// y in bar: 4
//  error