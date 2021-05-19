// let arr = [ [1,2,3], [4,5,6] ];
// console.log(arr.length); // 2
// console.log( arr );


let arr = [
	[1,2,3],
	[4,5,6]
];
// console.log(arr);
// console.log( arr[0][0] ); // 1
// console.log( arr[0][1] ); // 2
// console.log( arr[0][2]); // 3
// console.log( arr[1][0]); // 3
// console.log( arr[1][1]); // 3

// console.log( arr[0].length );

// log all AoA elements:
for( let i = 0; i<arr.length; i++ ){
	let el = arr[i];
	// console.log(el);

	for( let j=0; j<el.length; j++){
		console.log( el[j]);
	}
}




// // sum of array of array:
// let sum = 0;
