/* ------------------- Function can be asigned to variable ------------------ */
// let x = function() {
//     console.log(`Anon`);
// };

// let y = 1;

/* ------------------------ Function as array element ----------------------- */
// let arr = [
//     1,
//     "1",
//     [1,2,3],
//     function() {
//         console.log(`Anon`);
//         return 5
//     }
// ];

// // console.log( arr[2][2] + 1);//4
// console.log( arr[3]() ); //

// let calc = [
//     function(x,y) {
//         return x+y
//     },
//     function(x,y) {
//         return x-y
//     },
//     function(x,y) {
//         return x*y
//     },
//     function(x,y) {
//         return x/y
//     }
// ];

// console.log( calc[0](1,2) );
// console.log( calc[1](1,2) );
// console.log( calc[2](1,2) );
// console.log( calc[3](1,2) );




/* ------------------- Function can be passed as arguments ------------------ */
// function foo(x) {
//     console.log(x);
//     x();
// }

// let bar = function() {
//     console.log(`Bar`);
// };

// foo( bar );


// RAM:
// Global:
//     foo: 0x123: [function foo]
//     bar: 0x143: [function bar]
// foo:
//       x:0x543: 0x143


// function onClick(event, f) {
//     console.log(`onClick is callled`);
//     if(event==='click'){
//         f();
//     }
// };

// onClick('click', function() {
//     console.log(`Clicked`);
// })

// onClick is callled
// Clicked



// function caller(f) {
//     console.log(`I will call bar:`);
//     f();
// }

// function bar() {
//     console.log(`Bar is called!`);
//     return function() {
//         console.log(`Hello`);
//     };
// }

// caller( bar() );

// Bar is called!
// I will call bar:
// Hello




function foo(){
    return function(){
      console.log(`I'm the returned function`);
    }
}

let arr = [
    function() {
        console.log(`Hello`);
    }
];

arr[0]();
foo()();

let bar = foo();
bar();

