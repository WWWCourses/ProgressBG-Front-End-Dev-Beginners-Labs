// let names = ['Pesho', 'Asen', function(x){
// 	// let x = 3;
// 	console.log(x**2);
// }];

// names[2](3);

// let arr = [1,2,3]
// console.log( arr );

// let obj = {
// 	'num1':1,
// 	'num2':2,
// 	'num3':3
// };

// console.log( obj );

// let devloper1Arr = [
// 	"Ivan",
// 	['HTML', 'CSS', 'JS'],
// 	'Ivanov',
// 	function() {
// 		console.log(`Apply for job`);
// 	}
// ];

// let x;
// console.log( devloper1Arr[10] );



// let developer1 = {
// 	'firstName': "Ivan",
// 	'skills': ['HTML', 'CSS', 'JS'],
// 	'surName':'Ivanov',
// 	'applyForJob': function() {
// 		console.log(`Apply for job`);
// 	}
// }

// console.log( developer1.x);
// developer1.applyForJob()



// const prices = {
// 	'apples':  2.50,
// 	'oranges': 3.45,
// 	'bananas': 2.80
// }

// // let fruitName = 'bananas';
// // console.log( prices.fruitName );//
// // console.log( prices[fruitName] );//

// console.log( prices.bananas );
// console.log( prices['ban'+'anas'] );

// // console.log( "bananas" );




/* --------------------------------- Example -------------------------------- */
let developer1 = {
	'firstName': "Ivan",
	'skills': ['HTML', 'CSS', 'JS'],
	'surName':'Ivanov',
	'applyForJob': function() {
		console.log(this.firstName);
	}
}

let developer2 = {
	'firstName': "Asen",
	'skill': ['Python', 'C++'],
	'surName':'Asenov',
	'applyForJob': function() {
		console.log(this.firstName);
	}
}

// // developer1.applyForJob()
// // developer2.applyForJob()

// console.log( developer1 );



// console.log( this );


let arr = [1,2]
let obj = {
	'0':1,
	'1':2,
	'length':2,
}

console.log( arr[1] );
// console.log( obj.1 );
console.log( obj[1] );


