/* ------------------------------- Block Scope ------------------------------ */
// {
// 	var x = 1;
// 	let y = 1;
// 	const z = 1;
// }

// console.log(z);// error

///// Example
// for (let i = 0; i < 5; i++) {
// 	console.log(i);
// }

// console.log(`i in main: ${i}`);

/* ------------------------------- Redeclaring ------------------------------ */
// var x = 1;
// console.log(x);


// let x = 5;
// // console.log(x);

///// Example:

// function foo() {
// 	let x = 1;
// 	console.log(x);

// 	var x = 9;
// }
// foo()

// // foo:{
// // 	x:1
// // }

// // global:{
// // 	x:2
// // }
// let x = 2;

// console.log(x);

/* ------------------------------ Let vs Const ------------------------------ */
// const x = 1;
// x = 9;
// console.log(x);

// const x=;

// console.log(x);

//// Example
// const arr = [1];
// arr[0] = 0;

// console.log(arr); // [9]


