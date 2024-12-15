// function foo() {
//     let y = 2;
//     console.log(`y in foo: ${y}`);//
// };

// foo();

// console.log( y );// Reference Error: y is not defined
// console.log(`END`);


// // RAM:
// // Global
// //     foo:0x235: function foo


/* --------------------------------- Example -------------------------------- */
// function foo() {
//     x = 2;
//     console.log(`x in foo:${x}`);
// };
// function bar() {
//     x = 3;
//     console.log(`x in bar:${x}`);
// };

// let x = 1;
// foo();
// bar();
// console.log(`x in global:${x}`);

// //Output:
// // x in foo: 2
// // x in bar: 3
// // x in global:3

// // RAM:
// // global:
// //     foo:function
// //     bar:function
// //       x:3

/* --------------------------------- Example -------------------------------- */
// function foo() {
//     function bar() {
//         let x = 3;
//         console.log(`x in bar:${x}`);
//     };

//     let x = 2;
//     bar();

//     console.log(`x in foo:${x}`);
// };

// let x = 1;
// foo();
// console.log(`x in global:${x}`);

// //OUTPUT:
// // x in bar:3
// // x in foo: 2
// // x in global:1


// /* --------------------------------- Example -------------------------------- */
// function foo(x) {
//     console.log(`x in foo:${x}`);
// }
// const x = 1;

// foo(3);

// console.log(`x in global: ${x}`);


// // RAM:
// // global:
// //     foo: function
// //       x: 1
// //foo:
// //   x:3







