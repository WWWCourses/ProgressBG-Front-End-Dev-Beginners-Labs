// expression vs. statement
// var x;
// console.log( x=4+1 );
// console.log( var y );

// // very BAD practise:
// if( 0 )
//     console.log(`1`);
//     console.log(`END`);

// if (2>3){
//     console.log(`Yes`);
// }
// console.log(`END`);


// var userAge = 22;
// if (userAge >= 18) {
//     console.log(`Adult`);
// } else {
//     console.log(`Child`);
// }

// var x = 0;
// if x is EVEN => log('Even')
// if x is ODD => log('Odd')

// if (x%2  === 0) {
//     console.log(`Even`);
// } else {
//     console.log(`Odd`);
// }

// if (x%2) {
//     console.log(`Odd`);
// } else {
//     console.log(`Even`);
// }

// var userBirthYear = 2000;
// if (!userBirthYear) {
//     userBirthYear = 1990;
// }

// console.log( userBirthYear );

// var x = -5;

// if( x<0 && x%2 ){
//     console.log(`Negative Odd`);
// }else if( x<0 && !(x%2) ){
//     console.log(`Negative Even`);
// }else if( x>0 && x%2 ){
//     console.log(`Positive Odd`)
// }else if( x>0 && !(x%2) ){
//     console.log(`Positive Even`)
// }else{
//     console.log(`0`);
// }

// ternary operator:
var x = 3, y;

if(x%2){
    y = x+1;
}else{
    y = x;
}
console.log(`1. y = ${y}`);
// the same as above with ternary operator
y = x%2 ? x+1 : x;
console.log(`2. y = ${y}`);

