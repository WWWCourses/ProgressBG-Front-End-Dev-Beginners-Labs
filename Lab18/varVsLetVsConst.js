/* ------------------------- No diff in local scope ------------------------- */
// function foo() {
//     const x=1;
// }

// console.log(`x in global: ${x}`);

/* ------------------------------- Block scope ------------------------------ */
// if(true){
//     var x = 1;
//     let y = 2;
//     const z = 3;
// }

// console.log(`x in global: ${x}`);
// console.log(`y in global: ${y}`);

/* ------------------------------ Re-declaring ------------------------------ */
// var x = 1;
// let x = 5;//Error

// console.log(x);

// // RAM:
// //     x:0x123:1
// //     x:


/* ------------------------------ Let vs Const ------------------------------ */
let x;
x = 1;
const PI=3.14;
// PI=5; // Error

const arr = [1,2];
// arr=8; // Error

arr[1]=9;
arr.push(100)
console.log(arr);

// RAM:
//     x:0x123: 1
//    PI:0x123: 3.14
//   arr[0]:0x345:1
//   arr[1]:0x355:2