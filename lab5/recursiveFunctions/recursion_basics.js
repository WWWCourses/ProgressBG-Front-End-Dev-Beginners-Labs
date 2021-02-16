// recursive definition
// GNU = GNU is Not Unix

// endless recursive function demo
let maxRuns = 5;
let a = 1;

function foo() {
    // recursion action
    console.log(`a++:${a++}`);
    maxRuns--;

    // condition for exit from recursion:
    if (maxRuns === 0) {
        return;
    }
    foo(); // recursive call

    // foo();
    // console.log(`THIS WILL NEVER BE EXECUTED`);
};
foo();

// RAM GLOBAL:
// 0x12345: foo => function

// STACK foo1:
// 0X1234: a => 5

// STACK foo2:
// 0X1237: a => 5

// STACK foo3:
// 0X1238: a => 5

// STACK foo4:
// 0X1238: a => 5




// itarative eqiuvalent
// for (let i = 0; i < 1; i) {
// 	console.log(`hi`);
// }