// callback function
// function foo(f) {
//     f();
//     console.log('====================================');
//     console.log(`I'm foo!`);
//     console.log('====================================');
// };

// function bar() {
//     console.log('====================================');
//     console.log(`I'm bar`);
//     console.log('====================================');
// }

// foo(bar);

// function as return value
function foo(userName) {
    return function () {
        console.log('====================================');
        console.log(`Hello, ${userName}`);
        console.log('====================================');
    }
};

let bar = foo('Asen');
bar();


// let bazz = function () {
//     console.log('====================================');
//     console.log('Hello, ${userName}');
//     console.log('====================================');
// };
// bazz();

