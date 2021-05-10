/* ----------------------------- basic concepts ----------------------------- */
//  operation addition: 2+3
// + - operator (operation sign)
//  2 - operand 1
//  3 - operand 2

/* -------------------------------------------------------------------------- */
/*                            aritmetic operations                            */
/* -------------------------------------------------------------------------- */
// console.log( 3+4 ); // 7

// console.log( 4%0 ); // 4
// console.log( 4%1 ); // 0
// console.log( 4%2 ); // 0
// console.log( 4%3 ); // 1
// console.log( 4%4 ); // 0
// console.log( 4%5 ); // 4


// console.log( 2 * 10); // 20
// console.log( 2 ** 10); // 1024
// console.log( 2 *!* 10); // 1024

/* -------------------------------------------------------------------------- */
/*                            ++ and -- operations                            */
/* -------------------------------------------------------------------------- */

// variable++ => suffix increment
// ++variable => prefix increment

// let x = 1;
// // increment a variable:
// x = x + 1;
// console.log( x ); // 2


// /* ----------------------------------- x++ ---------------------------------- */
// let x = 3;
// console.log( x );   // 3
// console.log( x++ ); // 3 (x++ value is x)
// console.log( x );   // 4 (x is incremented)

// /* ----------------------------------- ++x ---------------------------------- */
// let y = 3;
// console.log( y );   // 3
// console.log( ++y);  // 4 (++y value is y+1)
// console.log( y );   // 4 (y is incremented)

/* -------------------------------- examples -------------------------------- */
// console.log( 3++ ); // 3 | 4 | error |
// let x =1;

// console.log( x++ + 1); // 2 | 2
// console.log( x ); // 2 |

// let x = 1,y = 1;
// console.log( x++ + ++y); // 3|
// console.log(`x = ${x}`); // 2
// console.log(`y = ${y}`); // 2

// console.log( x++ + ++x);  //  3 | 5 | 4
// // console.log( 1 + 3);  //
// console.log(`x = ${x}`);  // x = 3



// let x = 1;
// console.log( x++ );