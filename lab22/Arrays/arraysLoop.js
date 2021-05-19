// let arr = ["a", "b", "c"];

// let str = "";
// for (let i = 0; i < arr.length; i++) {
// 	let element = arr[i];
// 	str += element;
// }

// console.log(`str = ${str}`); // "abc"

// INVERSE
let arr = ["a", "b", "c"];
// console.log( arr.length - 1 );
// console.log( arr[arr.length-1] );



let str = "";
let lastElementIndex = arr.length-1;

for (let i = lastElementIndex; i>=0; i--) {
	console.log(`i = ${i}`);

	let element = arr[i];
	str += element;
}


console.log(`str = ${str}`); // "cba"


