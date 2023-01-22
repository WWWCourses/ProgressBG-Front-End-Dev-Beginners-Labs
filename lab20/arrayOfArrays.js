// let arr = [[1,2],2,3];

// console.log( arr.length );

// // console.log( arr[0] );//
// let tmpArr = arr[0];
// console.log( tmpArr[0]);
// console.log( arr[0][0]);
// console.log( arr[0][1]);

let m = [
	[1,2,3],
	[4,5,6],
	[7,8,9]
];
for (let i = 0; i < m.length; i++) {
	const element = m[i];
	// console.log(element);
	for(let j=0; j<element.length;j++ ){
		// console.log( m[i][j] );
		console.log( element[j] );
	}
}