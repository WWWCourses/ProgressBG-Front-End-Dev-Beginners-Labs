/* ------------------------------ Array Object ------------------------------ */
// let arr1 = [1,2,3];
// let arr2 = new Array(1,2,3);

// console.dir(arr1);
// console.dir(arr2);

// TASK 1: given is [1,2,4,3,2] => remove 2d and 3d arrays elements, so that newArr = [1,3,2]

// let arr =  [1,2,4,3,2];
// let newArr = [...arr];

// newArr.splice(1,2);
// console.log(arr);
// console.log(newArr);


/* ------------------------------- DATE Object ------------------------------ */
// console.log( Date.now() );

// let now = new Date();
// console.log( `${now.getHours()}:${now.getMinutes()}` );


// // Example 1
// // YYYY-MM-DDTHH:mm:ss.sssZ
// let userBirthDateStr = '1990-03-23';
// // let userBirthDate = new Date(1990,2,24)
// let userBirthDate = new Date(userBirthDateStr)
// console.log(userBirthDate);
// // console.log( userBirthDate.getFullYear());


/* ---------------------------- arguments object ---------------------------- */
// function add() {
// 	// console.log( arguments );
// 	let sum = 0;
// 	for (let i = 0; i < arguments.length; i++) {
// 		const element = arguments[i];
// 		sum+=element
// 	}
// 	return sum;
// }

// console.log( add(2,3) );
// console.log( add(2,3,4) );
// console.log( add(2,3,4,5) );


/* ------------------------ objects wrapping (boxing) ----------------------- */
// function foo(x,y){};
// console.dir(foo);
// foo.id = 1;
// console.dir(foo);


// let arr = [1,2,3];
// console.dir(arr);
// arr.id = 1;
// console.dir(arr); //

// let str = "123";
// let strObj = new String('abc');
// console.log(typeof(str));
// console.log(typeof(strObj));

// str.id = 1;
// strObj.id = 1;
// console.log( str.id );// undefined
// console.log( strObj.id );// 1

console.log( (new String('abc')) );

let userName = 'ada';
// let userNameObj = new String(userName);
// console.log(userNameObj.toUpperCase());

console.log( userName.toUpperCase());

// console.log( "abc".toUpperCase() );
// console.log( (new String('abc')).toUpperCase() );

userName.id = 1;
// (new String(userName)).id = 1;
console.log( userName.id ); // undefined
// console.log( (new String(userName)).id );

