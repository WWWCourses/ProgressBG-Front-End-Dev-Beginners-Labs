// // pure function
// y = power(x);

// X:      Y:
// 1   ->  1
// 2   ->  4
// 3   ->  3

// let userName1 = 'Ada';
// // greet user:
// console.log('*'.repeat(20));
// console.log(`Hello, ${userName1}`);
// console.log('*'.repeat(20));


// let userName2 = 'Pesho';
// // greet user:
// console.log('*'.repeat(20));
// console.log(`Hello, ${userName2}`);
// console.log('*'.repeat(20));

/* -------------------------- Function Declarations ------------------------- */
function greetUser(userName,symbol){
	// let userName = 'John'
	// let symbol = '*'
	console.log(symbol.repeat(20));
	console.log(`Hello, ${userName}`);
	console.log(symbol.repeat(20));
};
let x = 5;


// // Function Call
// greetUser('Ada', '*');
// greetUser('Pesho', '~');
// greetUser('Maria', '=');
// greetUser('John')


// RAM:
// 	greetUser:0x234	=> 0101010101010101 [function]
// 	        x:0x342 => 00000101(5)

/* --------------------------- Function Expression -------------------------- */
let greetUser2 = function(){
	console.log('*'.repeat(20));
	console.log(`Hello, ${userName2}`);
	console.log('*'.repeat(20));
};
let y;

// RAM:
// 	greetUser2:0x234	=> 0101010101010101 [function]
// 	        y:0x342 => 00000101(5)





let add = function(x,y) {
	console.log(x+y);
};


// add(2,3);
// add(2);
// add(2,3,4);

// let res = Math.pow(2,3);
// console.log( res+2 );

let res = add(2,3);
console.log( res );