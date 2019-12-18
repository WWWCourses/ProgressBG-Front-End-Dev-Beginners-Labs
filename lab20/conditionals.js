// statement vs. expression
// console.log( var x ); // error, "var x" is statement
// var x;
// console.log( x = 4 ); // ok, "x = 4" is expression

// bad practice:
// if( false )
//     console.log(`ok 1`);
//     console.log(`ok 2`);


// var x = 4;
// if (x%2) {
//     console.log(`X is Odd`);
// }

// if ( !(x%2) ) {
//     console.log(`X is Even`);
// }

// var x = 8;
// not good to have nested if-else
// if( x === 0){
//     console.log('Zero');
// }else{
//     if(x%2){
//         console.log('Odd');
//     }else{
//         console.log('Even');
//     }
// }

// better:
// if( x === 0){
//     console.log('Zero');
// } else if (x % 2) {
//     console.log('Odd');
// } else {
//     console.log('Even');
// }

// ternary operator:
// condition ? expr1 : expr2

// if (condition){
//     expr1
// }else{
//     expr2
// }

var x = 42;
var numType = x % 2 ? "odd" : "even";
