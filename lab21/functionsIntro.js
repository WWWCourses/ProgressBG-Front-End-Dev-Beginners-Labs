// (pure) function

// y = power2(x)

// X => power => Y
// 1      =>     1
// 2      =>     4

// Function Declarations
// function greetUser(){
// 	console.log(`*`.repeat(20))
// 	console.log(`Hello, Ada`);
// 	console.log(`*`.repeat(20) );
// };
// let arr = [1,2,3];

// // Function Expression
// let greetUser = function(){
// 	console.log(`*`.repeat(20))
// 	console.log(`Hello, Ada`);
// 	console.log(`*`.repeat(20) );
// };

// RAM:
// 	greetUser:0x123: [function]
// 		arr  :0x675: [array]



// function greetUser(userName, symbol) {
// 	// let userName = 'Ada';
// 	// let symbol  = '*'
// 	console.log(symbol.repeat(20))
// 	console.log(`Hello, ${userName}`);
// 	console.log(symbol.repeat(20) );
// };

// // RAM:
// // 	greetUser: 0x123: [function]

// greetUser('Ada','*');
// greetUser('Pesho','~');
// greetUser('Maria','=');



function sum(x, y){
	// let x = 2, let y = 3;
	console.log( x + y );
	// return x+y;
};

console.log( sum(2,3) ); // 5
console.log( sum(1,2) ); // 3
let res = sum(2,3) + sum(1,2);
console.log(`res = ${res}`);
