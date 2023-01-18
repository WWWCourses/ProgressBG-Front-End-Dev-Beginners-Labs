// let age = 12;


// if(age>=18){
// 	console.log(`Hi`);
// 	console.log(`1`);
// 	console.log(`2`);
// }else{
// 	console.log(`Go home`);
// };

// console.log(`END`);

// TASK: log 'Even' if x is event, else log 'odd'

let x = 8;
// if( x%2 ){
// 	console.log(`Odd`);
// }else{
// 	console.log(`Even`);
// };

// if( !(x%2) ){
// 	console.log(`Even`);
// }else{
// 	console.log(`Odd`);
// };

// console.log( !1 );
// console.log( !3>5 );
// console.log( !(3>5) );

// let age = 0;

// if(age>=18){
// 	console.log(`adult`);
// }else if (age<18 && age>12) {
// 	console.log(`Teen`);
// }else if (age=12) {
// 	console.log(`Child`);
// }else{
// 	console.log(`Who knows...`);
// }

/* ----------------------------- ternaryOperator ---------------------------- */
let age = 33;
let stat;

// if (age>=18) {
// 	stat = 'adult'
// }else{
// 	stat = 'child'
// }

// Условие ? Израз1 : Израз2
stat = age>=18?'adult':'child';

// stat = age>=18?'adult':
// 	(age<18 && age>12)?'Teen':'child';

console.log( stat );