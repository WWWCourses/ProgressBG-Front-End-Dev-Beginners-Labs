// console.dir( arguments );
let add = function(x,y) {
	console.log(x,y);
	console.dir( arguments );

	let sum = 0;

	for (let i = 0; i < arguments.length; i++) {
		const element = arguments[i];
		sum+=element;
	}

	return sum;
}


// console.log( add([2,3]) );
// console.log( add([2,3,4]) );
// console.log( add([2,3,4,5]) );

console.log( "sum = ", add(2,3) );
console.log( "sum = ", add(2,3,4) );
console.log( "sum = ", add(2,3,4,5) );

