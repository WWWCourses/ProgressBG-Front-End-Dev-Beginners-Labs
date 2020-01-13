// console.log(`test`);
// // let vs. var: redeclaring:

// var x;
// var x = 4;

// // let x;

// // let vs. var: block scope
// if(1){
//     // block scope
//     var y = 5;
//     let z = 5;
// }

// console.log(`y = ${y}`);
// console.log(`z = ${z}`);

// define sum() function, which beheives as shown:

// >>>>>>> your code starts here:
// let a = 10, b = 100;
// function sum(a) {
//     z = 1000000;
//     a = 9;
//     b = 9;
//     return a+b;
// }
// console.log( sum(a,b) );  // 18
// console.log(`a=${a}; b=${b}`); // a = 10, b = 100

// console.log(`z = ${z}`);

let x = 0;

let foo = function () {
    x = 1;
    console.log(`x in foo:  ${x}`);
}
let bar = function () {
    x = 2;
    console.log(`x in  bar: ${x}`);
}
foo();
bar();
console.log(`x in main = ${x}`);

// x in foo 1
// x in bar 2
// x in main 0

