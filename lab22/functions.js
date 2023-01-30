// function add(x,y) {
// 	console.log(x+y);
// }
// let x = 5;

// let res = add(2,3) + add(3,4);
// // let res = undefined + add(3,4);
// // let res = undefined + undefined;
// console.log(`res: ${res}`);

// // RAM:
// // 	add:0x123: function
// // 	  x:0x143: number (5)
// // 	res: 0x345: ?


function foo(x) {
	// let x;
	console.log(`1`);
	return x**2;
	console.log(`2`);
}


// let x;

// RAM:
// 	x: 0x123:undefined
//   foo: 0x345: function

// console.log( foo ); //
// console.log( foo() ); //
console.log( foo(5) ); //


