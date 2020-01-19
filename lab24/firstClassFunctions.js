// let foo = function(a) {
//     console.log(a);
//     a();
// }

// let bar = function() {
//     console.log(`Bar`);
// }


// foo(function(){
//     console.log(`Hello`);
// });

// foo( bar );

// global.setTimeout(function() {
//     console.log(`Hi`);
//     console.log(`Hi`);
//     console.log(`Hi`);
//     console.log(`Hi`);
//     console.log(`Hi`);
// }, 3000);


function bar() {
    console.log(`Bar`);
}

function foo() {
    return bar;
}

foo()();

let arr = [
    [1,2],
    [3,4]
]
arr[1][1]



