// var x = 5;
// let y = 6;

// function sum(a,b) {
//     let c = 3; // local variable
//     var z = 4; // local variable

//     d = 42; // global variable - VERY BAD

//     console.log(`x in sum: ${x}`);
//     console.log(`c in sum: ${c}`);
//     console.log(`z in sum: ${z}`);
//     console.log(`d in sum: ${d}`);
// }
// sum(2,3);


// let vs. var in the context of block scope:
// for(;true;){
//     let x = 4;
//     var y = 5;
//     break;
// }
// console.log(`y = ${y}`);
// console.log(`x = ${x}`);


// console.log(`a in main: ${a}`);
// console.log(`x in main: ${x}`);
// console.log(`c in main: ${c}`);
// console.log(`z in main: ${z}`);
// console.log(`d in main: ${d}`);



// shadowing:
var x = 5;
function foo(x) {
    console.log(`x in foo: ${x}`);
}

foo(3);
console.log(`x in main: ${x}`);
