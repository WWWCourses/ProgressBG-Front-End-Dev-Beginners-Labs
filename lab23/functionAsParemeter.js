// function foo(x) {
// 	// let x = bar;
// 	x();
// }

// let bar = function() {
// 	console.log(`I'm bar`);
// }

// bar(); // I'm bar

// foo(bar);



// // RAM:
// // 	GLOBAL:
// // 		1234: foo => [function foo]
// // 		1243: bar => [function bar]

// //  fooScope:
// // 		1221: x => [function bar]