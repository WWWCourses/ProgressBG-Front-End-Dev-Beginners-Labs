// console.log( arguments );

// const sumExp = function(){
// 	console.log( arguments );
// }

// const sumArr = ()=> {
// 	console.log( arguments ); // ?
// }

// // sumExp(2,3);
// sumArr(2,3);

console.log(`arguments in global:`);

function foo() {
	console.log(`arguments in foo`); // [2,3]
	console.dir(arguments);

	const bar = ()=>{
		console.log(arguments); // lexical arguments
	}

	bar(9,8);

}

foo(2,3);
