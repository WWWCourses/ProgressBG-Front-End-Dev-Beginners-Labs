// DO NOT DO THIS:
// let Math = {
// 	PI:2.3434343,
// 	sum:function () {
// 		console.log(`My sum`);
// 		return 5;
// 	}
// }

// let Math = 5;

// console.log( Math.PI );
// console.log( Math.min(2,3) );

// console.log( Math );

/* ---------------------------------- Date ---------------------------------- */
// let now = 10000000000;
// console.log( now/1000/60);

// let now = new Date();
// console.log(now);
// console.log(`current hour: ${now.getHours()}`);

// Example: Track execution time
// let start = Date.now();
// console.log( 3454645645**7888 );
// let end = Date.now();
// console.log(end-start);


// Example: calc user age
// let userBirthDateStr = '01/31/2000';
// let userBirthDate = new Date(userBirthDateStr);

// let userBirthYear = userBirthDate.getFullYear();
// // console.log(userBirthYear);
// let currentYear = (new Date()).getFullYear();
// // console.log(currentYear);

// console.log(`User age is: ${currentYear-userBirthYear}`);

/* -------------------------------- arguments ------------------------------- */
// function sum() {
// 	// console.dir(arguments);
// 	// console.log( arguments[arguments.length-1] );
// 	let totalSum = 0;
// 	for (let i = 0; i < arguments.length; i++) {
// 		const element = arguments[i];
// 		totalSum+=element
// 	}

// 	console.log(`sum = ${totalSum}`);

// }
// sum(1);
// sum(1,2);
// sum(1,2,3);

/* --------------------- Primitive Types Wrapping/Boxing -------------------- */
// let userName = 'Ada';
// let userNameUpper = userName.toUpperCase();
// console.log(userNameUpper);

// let userName = 'Ada';
// let userNameObj = new String(userName);
// console.dir(userName);
// console.dir(userNameObj);


// console.log( userName.length);
// console.log( userNameObj.length);


// 'ada'.a = 1;
// (new String('ada')).a = 1

// let userName = 'Ada';
// let obj = {};

// obj.a = 1
// console.log(obj.a);

// (new String(userName)).a = 1;
// console.log( (new String(userName)).a );

let str = 'adajkjskfjkdsjlkdsjgdlkjglkdfj'

// let strObj = new String(str);
// console.log(strObj.length);

// console.log( str.length );

// console.log( `*`.repeat(10) );

// let text = `abc ifdiogfdigofd  jsdkjkds343545`;
// let containsTest = text.includes('test');
// if(containsTest){
// 	console.log(`Yes`);
// }

