/* ----------------------- Template/multiline strings ----------------------- */
// let msg = `Line 1
// Line 2
// Line 3
// Line 4`;

// console.log(msg);

// let userName = 'Ada';
// console.log('Hello, ' + userName + '!');
// console.log(`Hello, ${userName}!`);

/* ------------------------------ Boolean type ------------------------------ */

// console.log( true );
// console.log( false );

/* ------------------------ null and undefined types ------------------------ */

// let x = null;//dev say that x is null
// // let y = undefined;
// let y; // y is undefined
// console.log(`y=${y}`);

// console.log( typeof 5);
// console.log( typeof '5');
// console.log( typeof true);
// console.log( typeof null);
// console.log( typeof undefined);
// console.log( typeof y);

// console.log(typeof 5);
// console.log(typeof NaN);

// console.log( 'ada'*4 );

/* -------------------------- Arithmetic Operators -------------------------- */
// console.log( 4 - -2 );
// console.log( 5/2 );

// modulus operation
// console.log( 5%2 ); // 1
// console.log( 5%3 ); // 2
// console.log( 5%4 ); // 1
// console.log( 5%5 ); // 0


// console.log( Math.pow(2,3) );
// console.log( 2**3 );

/* -------------------------------- Increment ------------------------------- */
// let userAccountForPastYear = 5;
// userAccountForPastYear = userAccountForPastYear + 1; // NEVER DO THAT
// userAccountForPastYear += 1;
// userAccountForPastYear++;

// console.log(`userAccountForPastYear = ${userAccountForPastYear}`);

// let x = 1;
// console.log( ++x );//2
// console.log( x ); // 2

// let x = 1;
// let y = 1;
// console.log(x++ + 2); 	// 3; 3;
// console.log(`x=${x}`);  // 2

// console.log(x++ + ++y); // 3
// console.log(x,y);       // 2,3; 1,2; 2,2

// let x = 1;
// console.log(x++ + ++x); // 1 + 3 = 4
// console.log(`x=${x}`);  // 3

// let x = 5;
// let y = 5;
// console.log(x--,x);
// console.log(--y,y);


// RAM:
// 	x=>0x2332: 5


/* ------------------------------- Math Object ------------------------------ */
// console.log( Math.PI );
// console.log( Math.random() );
// console.log( Math.round(3.45678) ); //3

/* -------------------------- String Concatenation -------------------------- */
// let userName = 'Ada';
// let userLastName = 'Byron';

// console.log( userName + ' ' +userLastName );
// console.log( `${userName} ${userName}` );

// console.log( '5' + 3 );//
// console.log( '5' / 2 );//
// console.log( 'a' / 2 );//

// console.log( typeof('23'*1) );
// console.log( typeof(+'23') );

// let x,y,z;

// x = 2+2;
// y = x * 4;
// z = x+y**2;
// console.log(x,y,z); // 4,16,260

// let x,y;
// console.log( x=y=3 );// 3

// RAM:
// 	x:0x324: 3
// 	y:0x325: 3

// let lastYearBudget = 5;

// // lastYearBudget=lastYearBudget+10;
// lastYearBudget+=10;
// console.log( lastYearBudget );

// let x = 1;
// x+=1;
// console.log(x);

// console.log( 3+3+3);
// console.log( 3+3*3 );
// console.log( 3+(3*3) );
// console.log( (3+3)*3 );
// console.log( typeof(5/0) );

// console.log( 'number'/ 0 ); NaN

// let x;
// x = (2,3);
// console.log(x);

/* -------------------------- Comparison Operators -------------------------- */
// // compare for equolity by value
// console.log( 3==3 ); // true
// console.log( 3=='3'); // true
// // console.log( 3='3'); // error

// compare for not equolity by value
// console.log( 3 != 3 );  // false;
// console.log( 3 !='3');  // false

// // compare for not equolity by type and value
// console.log( 3 !=='3'); // true

// // compare for equolity by type and value:
// console.log( 3==='3' ); // false
// console.log( 3===3 ); // false

// less than, greater than...
// console.log( 5<5 );
// console.log( 5<=5 );
// console.log( 5>=5 );
// console.log( 5=>5 ); // error

// let x = 5;
// console.log( x>=5 );
// console.log( x=>5 );

// console.log(   19 > 3 ); // true
// console.log( '19' > '3_');//false
// '1'>'3' = false
// 49>51 = false

// console.log( 'abc' > 'Abc');// true

// console.log( '29' > '2');//false
// '9'>null symboll = true
// 57>0 = true


/* ---------------------------- Logical operators --------------------------- */
// let x = 5;
// console.log( true && false );// false
// console.log( true || false );// true
// console.log( !true ); // false
// console.log( !(x>3) ); // false

// console.log( 5>2 ); //true
// console.log( true && false );//
// console.log( 3 && 0 );//

// AND, OR, NOT

// let userAge = 14;
// let country = 'FR';

// console.log( userAge>=18 || country=='FR' );// true
// console.log( false || true );// false;

// // if( userAge>=18 ){
// // 	console.log(`Welcome`);
// // }

// // if( country==='BG'){
// // 	console.log(`Здравей`);
// // }


// if( userAge>=18 && country=='BG' ){
// 	console.log(`Hi`);
// }


// let userAge = 5;
// if( userAge ){
// 	console.log(`Hi`);
// }

// console.log( 5 && 0);//0
// console.log( 5 && 34);//34

// console.log( 5 || 0); //5
// console.log( 5 || 34); //5

// console.log( !5 ); // false


// console.log( 5%2===0 );
// console.log( 4%2===0 );

// ако е вярно че x е четно , то изпиши в конзолата 'X e четно!':
let x = 6;

(x%2===0) && console.log("X e четно!");
