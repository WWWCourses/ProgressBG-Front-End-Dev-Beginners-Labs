/* -------------------------- Arithmetic Operations ------------------------- */
// Operand1 <operator> Operand2
// console.log(3/2);
// console.log(0.1 + 0.2);
// console.log(5%2); // 1
// console.log(5%3); // 2
// console.log(5%4); // 1

// let x = 3/2;
// console.log(x);

/* --------------------------- Increment/Decrement -------------------------- */
// let x = 1;
// let a = x++;
// console.log(x); //2
// let b = ++x;
// console.log(x); //3
// console.log(a); //1
// console.log(b); //3

// let x = 1;
// let y = 1;
// console.log( ++x + y++); //

// console.log( Math.round(2.3) );
// console.log( Math.round(2.5) );
// console.log( Math.round(2.7) );

// console.log( Math.PI);

// let x = Math.round( Math.random()*10 )
// console.log(x);

/* --------------------------- Strings Operations --------------------------- */
// console.log( 'a' + 3 ); 	//'a3'
// console.log( 'a' * 3); 	// NaN
// let x;
// console.log( x + 2);

// let x = '2';
// let y =  x * 3;
// console.log(y); //
// console.log( typeof x );


// let price = +'20';
// console.log( typeof price);

/* --------------------------- Assignment Operator -------------------------- */
// let x;
// let y = 3;
// x = y;
// console.log(x);//

// console.log( x = 3 );
// console.log( x );
// let x, y;
// x = y = 4;
// x + y + 4;


/* ---------------------- Shorthand Assignment Notation --------------------- */
// let budgetOfPastYear = 1000;
// // budgetOfPastYear = budgetOfPastYear / 100;
// budgetOfPastYear /= 100;
// console.log(budgetOfPastYear);

// let x = 1;
// // increment x:
// console.log( x += 1);
// console.log(x);

// console.log( (2 + 3) * 4 );

/* -------------------------- Comparison Operators -------------------------- */

// console.log( 2=='2' ); 	//true
// console.log( 2==='2' ); // false

// console.log( 2+3 === '4'+1 );//false

// let x = 1, y;
// y = x >= 3;
// console.log(y);


// console.log(  5!=3 );
// console.log(  5!='5' );
// console.log(  5!=='5' );


// console.log( 10>9 );

// console.log( '10'>'9' );
// console.log(  49 > 57); // false

// console.log( '9a' > '9A' );
// console.log( 97 > 64);



/* --------------------------- logical operations --------------------------- */


// && => Logical AND
// || => Logical OR
// !  => Logical NOT

// let userAge = 12;
// let userCountry = 'BG';

// if ( userAge>=18 || userCountry==='EN' ){
// 	console.log(`Welcome`);
// }


// console.log( true && false );
// console.log( true || false );
// console.log( false && true); //


// console.log( 0 && 2 ); //0


// let userAge = 0;

// if( userAge ){
// 	console.log(`AAA`);
// }

// let userName = "";
// if( userName ){
// 	console.log(`AAAAA`);
// }


// let userName = "Ada";
// userName = userName || 'Anonymous';
// console.log( `Hello, ${userName}!` );

// TASK: Log 'Even' if x is even
// let x = 5;

// if(x%2 === 0){
// 	console.log(`Even`);
// }

// TASK:
// Log 'Even' if x is even
// Log 'Odd' if x is odd
// let x = 0;
// if( x%2 === 0 ){
// 	console.log(`Even`);
// }else{
// 	console.log(`Odd`);
// }

// TASK:
// Log 'Zero' if x is 0
// Log 'Even' if x is even
// Log 'Odd' if x is odd
// let x = 0;
// Not good
// if (x===0){
// 	console.log(`Zero`);
// }else{
// 	if( x%2 === 0 ){
// 		console.log(`Even`);
// 	}else{
// 		console.log(`Odd`);
// 	}
// }


// GOOD!
// let x = 4;
// if (x===0){
// 	console.log(`Zero`);
// }else if(x%2 === 0){
// 	console.log(`Even`);
// }else{
// 	console.log(`ODd`);
// }


/* ---------------------------- Ternary Operator ---------------------------- */
// let userAge = 12;
// let stat = ''

// NOT GOOD
// if(userAge>=18){
// 	stat = 'adult'
// }else{
// 	stat = 'child'
// }

// console.log(stat); 'adult' | 'chilt'

// let stat = cond ? expr1 : expr2

// let userAge = 12;
// let stat = userAge>=18 ? 'adult' : 'child';

// console.log(stat);

// console.log( 3===2 ? 1 : 0 ); //
// let x = 2;

// if ( 2?1:0 ){
// 	console.log(`HI`);
// }