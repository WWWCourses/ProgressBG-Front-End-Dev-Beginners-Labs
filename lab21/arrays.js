// console.log( 2+4 );
// console.log( '2'+'4' );

// let arr = [1,2,3];
// console.log( arr[2] );
// console.log( typeof(arr) );

// arr[2] = 9;
// arr[5] = 10;
// console.log(arr);

// RAM:
// 	arr[0]:0x4353:1
// 	arr[1]:0x4352:2
// 	arr[2]:0x4355:9
//  ....
// 	arr[5]:0x4359:10

// examples of "invalid" indexing
// let arr = [1,2,3];
// console.log( arr['a'] );
// arr['a'] = 9;
// console.log(arr);
// console.log( arr[-1] );

/* ------------------------------ array methods ----------------------------- */

// let arr = [1,2,3];
// console.log( arr.length ); // 3
// arr.push(9);
// arr.reverse();
// arr.unshift(8);
// console.log(arr);

// console.log( arr.length ); // 5

// arr.length = 10;
// console.log( arr );

// let arr = [1,2,3,4,5];
// console.log( arr[arr.length-1] );

// TASK: log 'Empty' if arr is empty
// let userData = [1,2];
// if( userData.length===0 ){
// 	console.log(`Empty`);
// }

// console.log(userData); //B


// console.log( );

// let userData = [1,2];

// // console.log(userData.lenght );
// // console.log(userData.length );

// if( userData.lenght > 0 ){
// 	console.log(`Not Empty`);
// }else{
// 	console.log(`Empty`);
// }


// TASK: log each array element
// let arr = [1,2,3];

// console.log( arr[0] );
// console.log( arr[1] );
// console.log( arr[2] );

// for(let i=0; i<arr.length; i++){
// 	console.log( arr[i] );
// };


// Array of Arrays (AoA), nested array
// let data = [
// 	[1,2,3],
// 	'a',
// 	[5]
// ];

// console.log( data.length ); // 3,

// let tmp = data[0];
// console.log( tmp[1]);

// console.log( data[0][1] ); // 2

// let m = [
// 	[1,2,3],
// 	[4,5,6],
// 	[7,8,9]
// ];

// console.log( m[1][2] );
// console.log( m[1,2] );


let data = [
	[1,2,3],
	[4,5,6]
];
for (let i = 0; i < data.length; i++) {
	const arr = data[i];
	for (let j = 0; j < arr.length; j++) {
		const element = arr[j];
		console.log(element);
	}
}



