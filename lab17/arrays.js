/* --------------------- Arrays are Complex data types: --------------------- */
// Simple (atomic) data types in JS:
// numbers, strings, boolen, undefined, null

// let userName1 = 'Ada';
// let userName2 = 'Pesho'
// let userName3 = 'Maria'

// let users = ['Ada', 'Pesho', 'Maria'];
// console.log( users );

// let str = "'Ada', 'Pesho', 'Maria'";
// console.log(str);

// console.log( typeof []);
// console.log( typeof "");

/* --------------------------- RAM representation --------------------------- */
// let userName1 = 'Ada';
// let userName2 = 'Pesho'
// let userName3 = 'Maria'

// let users = ['Ada', 'Pesho', 'Maria'];

// RAM:
// 	userName1:0x123: 'Ada'
// 	userName2:0x143: 'Pesho'
// 	userName3:0x113: 'Maria'
// 	    users:0x173: 0x193, 0x103, 0x193
// 	 users[0]:0x193: 'Ada'
// 	 users[1]:0x103: 'Pesho'
// 	 users[2]:0x193: 'Maria'

/* ---------------------------- Array Operations ---------------------------- */
//// Indexining (Elements acces)
// let users = ['Ada', 'Pesho', 'Maria'];
// console.log( users[1] );
// console.log( users[0]);
// console.log( users[2]);


// console.log(x); // x is not defined
// console.log( users[3] ); // undefined

// write in array
// users[2] = 'Maria Petrova';
// console.log(users);

// users[3] = 'Nadya';
// console.log(users);

/* -------------------------------- Examples -------------------------------- */
// let users = ['Ada', 'Pesho', 'Maria'];
// let i = 3;
// console.log( users[i-2] );

/* ----------------------------- Array as object ---------------------------- */
// let arr = [1,2,8];
// get array elements count:
// console.log( arr.length );

// acces the last element of the array:
// console.log( arr[arr.length-1] );

// append element at end of array:
// let arr = [1,2,4];
// let x = 8;
// // arr[arr.length] = x;
// // arr.push(x)

// console.log( arr); //[1,2,4,8]

// remove element at specified position
// let arr = [1,2,3];
// arr.splice(1,1);
// console.log(arr);

/* ----------------------------- length property ---------------------------- */
// let arr = [1,2,3,4,5];
// console.log( arr.length);
// // console.log( arr.lenght);
// // remove first 3 elements:
// arr.splice(0,3);
// console.log(arr);
// console.log(arr.length);


// let arr = [1,2,3];
// arr.length = 0;
// console.log(arr);
// arr.length = 10;
// console.log(arr);












