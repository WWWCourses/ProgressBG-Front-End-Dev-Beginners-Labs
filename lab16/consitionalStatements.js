/* --------------------------------- if(){} --------------------------------- */
// let x = 5;
// // console.log( x ); //


// if( x ){
// 	console.log(1);
// 	console.log(2);
// 	console.log(3);
// }

// console.log(`END`);

// TASK: if x is odd => '5 is odd '
// let x = 8;

// // console.log( x%2 );
// if( x%2 ){
// 	console.log(`${x} is odd`);
// }

// TASK: if x is even => '5 is even '
// let x = 9;

// // console.log( x%2 );
// if( x%2===0){
// 	console.log(`${x} is even`);
// }

// TASK:
// if x is even => '5 is even '
// if x is odd => '5 is odd '

// Variant1 => VERY BAD!!!
// let x = 98;
// if( x%2 ){
// 	console.log(`${x} is odd`);
// }
// if( x%2===0){
// 	console.log(`${x} is even`);
// }

// Variant2 => the GOOD ONE:
// let x = 99;

// if( x%2 ){
// 	console.log(`${x} is odd`);
// } else{
// 	console.log(`${x} is even`);
// }

// console.log(`END`);



// TASK:
// if x is zero => 'Zero is not even or odd'
// if x is even => '5 is even '
// if x is odd => '5 is odd '

// Variant 1 => the BAD ONE!
// let x = 5;

// if(x===0){
// 	console.log('Zero is not even or odd');
// }else{
// 	if( x%2 ){
// 		console.log(`${x} is odd`);
// 	} else{
// 		console.log(`${x} is even`);
// 	}
// }


// Variant2 => the GOOD ONE:
// let x = 0;

// if(x===0){
// 	console.log('Zero is not even or odd');
// }else if( x%2 ){
// 	console.log(`${x} is odd`);
// 	}
// else{
// 	console.log(`${x} is even`);
// }


// TASK:
// if x is zero => 'Zero is not even or odd'
// if x = 3 => 'Fuzz'
// if x = 5 => 'Buzzz'
// if x is even => '5 is even '
// if x is odd => '5 is odd '

// Variant 1:
// let x = 9;
// if(x===0){
// 	console.log('Zero is not even or odd');
// }else if(x===3){
// 	console.log(`Fuzzz`);
// }else if(x===5){
// 	console.log(`Buzzz`);
// }else if( x%2 ){
// 	console.log(`${x} is odd`);
// }else{
// 	console.log(`${x} is even`);
// }


/* ---------------------------- Ternary Operator ---------------------------- */
// let userAge = 5;
// let status = '';
// if(userAge>=18){
// 	status = 'Adult'
// }else{
// 	status = 'Child'
// }

// console.log(`status=${status}`); // Adult/Child


// // VAriant2 : BEST
// let userAge = 6;
// let status = userAge>=18 ? 'Adult' : 'Child'

// console.log(status);