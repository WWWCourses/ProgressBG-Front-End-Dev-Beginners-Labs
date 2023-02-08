/* ------------------------------- Math Object ------------------------------ */
// let Math = {
// 	PI:3.141414141414141414141,
// 	abs:function(x) {
// 		return x<0?-x:x;
// 	}
// }
// console.log( Math );

// let res = Math.abs(5);
// console.log(res); // 5


// console.log( Math.random() );


/* ----------------------- Array Built In Constructor ----------------------- */
// let arr1 = [1,2,3];
// let arr2 = new Array(1,2,3);
// console.log(arr1);
// console.log(arr2);

// TASK: revert array elements
// let arr = [1,2,3];
// let newArr=arr.reverse();

// console.log( arr );
// console.log( newArr );


// Map demo
// let arr = [1,2,3];
// let newArr = [1, 8, 27]

// let mapping = function (el) {
// 	return el**3
// };

// let foo =  el=>el**3;
// console.log( foo );

// let cubArr = arr.map( el=>el**3 );
// console.log( cubArr );

/* ---------------------------- Working with Date --------------------------- */
// // Example 1
// let now = new Date();

// let birthYear = 1990;
// let currentYear = now.getFullYear();

// console.log(`You are ${currentYear - birthYear}`);

// // Example 2
// console.log( Date.now() );
// console.log( Date.now() );
// console.log( Date.now() );
// console.log( Date.now() );
// console.log( Date.now() );
// console.log( Date.now() );

// Example 3
// let userBirthDate1 = new Date(1990, 0, 3);
// let userBirthDate2 = new Date('1990-01-03T14:15:00');
// console.log( userBirthDate1.getFullYear() );
// console.log( userBirthDate2.getFullYear() );

// Example 4
// let now = new Date();
// console.log( `${now.getHours()}:${now.getMinutes()+10}` );


/* ---------------------------- Arguments Object ---------------------------- */
// function add() {
// 	// console.log(arguments);
// 	let sum = 0;
// 	for (let i = 0; i < arguments.length; i++) {
// 		const element = arguments[i];
// 		sum+=element;
// 	};
// 	return sum;
// };

// console.log(add());
// console.log(add(1));
// console.log(add(1,2));
// console.log(add(1,2,3));
// console.log(add(1,2,3,4));


/* ----------------------- primitive objects wrapping ----------------------- */
// let arr = [1,2,3];
// let arr2 = new Array(1,2,3);

// let str = "abc";
// let strObj = new String('abaca');


// let str = "str";
// let res = str.toUpperCase();
// let res = (new String(str)).toUpperCase();
// console.log( res );

// let obj = {}
// obj.id = 1;
// console.log( obj );
// obj.id = 5;
// console.log( obj );

// let arr = [1,2,3];
// arr.id = 1;
// console.log( arr.id );

// let str = "str";
// str.id = 1;
// // (new String(str)).id = 1
// console.log( str.id );


// // Example 2:
// let x = 3.455545545;
// console.log( x.toFixed(2) );

// let xObj = new Number(x);
// console.log( xObj.toFixed(2) );


// let arr = [1,4,3,5];
// console.log( Math.max( ...arr ));// from ES6..






