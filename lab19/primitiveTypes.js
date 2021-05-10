/* -------------------------------------------------------------------------- */
/*                                   number type (oranges)                    */
/* -------------------------------------------------------------------------- */

/* -------------------------------- example 1 ------------------------------- */
// let sallary1 =  2_123_000;
// let sallary2 = 1_565_0
// let x = 3.14;
// +3.14
// -3.14
// 1
// 2


// console.log(sallary1+sallary2); // ?

/* -------------------------------- example 2 ------------------------------- */

// let x = -8.4355;
// let y = "-8.4355";


// RAM:
// 0x12343: 000001010101 => x (-8.4355)
// 0x12378: 111001010100 => y ('-8.4355')


/* -------------------------------------------------------------------------- */
/*                                  string type (apples)                      */
/* -------------------------------------------------------------------------- */
// let str1 = "ala bala";
// let str2 = 'ala bala';
// let str3 = 'str1';
// let str4 = str1;


// console.log(str1); // ala bala
// console.log(str2); // ala bala
// console.log(str3); // str1
// console.log(str4); // ala bala

// escape sequences
// let str = '\"'; // "
// console.log(str);
// let pubName = 'Tom\'s pub';
// console.log(pubName);

// let str = ">\t<";
// console.log(str);

/* ----------------------------- template string ---------------------------- */
// let str1 = "\nline 1\nline 2";
// console.log(str1);

// let str2 = `
// line 1
// line 2
// `;
// console.log(str2);


// console.log(2+3); // 5
// console.log("2+3"); // 2+3

// console.log(`${2+3}`); // 5
// console.log("5"); // 5


// let userFirstName = "ada";
// let userLastName = "byron";

// // let greetMsg = `Hello, ${userFirstName}`;


// let greetMsg = `Hello, ${userFirstName} ${userLastName}!`
// // let greetMsg = "Hello "+userFirstName+" "+userLastName+"!";
// console.log( greetMsg); // "Hello, ada byron!"

/* -------------------------------------------------------------------------- */
/*                                boolean type  (avocado)                     */
/* -------------------------------------------------------------------------- */
// let true = 1;
// let str = true;

// console.log( typeof str); // boolean | error


/* -------------------------------------------------------------------------- */
/*                               null type (Leontopodium)                          */
/* -------------------------------------------------------------------------- */
// let str = null;
// console.log(typeof str); // null

/* -------------------------------------------------------------------------- */
/*                               undefined type (papaya)                      */
/* -------------------------------------------------------------------------- */
// let a;
// let x = 1;
// let str = "undefined";

// console.log( a ); // undefined


// // RAM:
// Ox12211: 01010101 (undefined)   => a
// Ox12221: 00000001 (1)   => x
// Ox12243: 01010101 ('undefined')   => str


/* -------------------------------------------------------------------------- */
/*                                  NaN Value                                 */
/* -------------------------------------------------------------------------- */

// let x = 5;
// console.log( typeof x); // number

// let y = NaN;
// console.log( typeof y); // number


// let x = 1, y;

// let res = (x+y) ** 2;
// console.log( res); //3


