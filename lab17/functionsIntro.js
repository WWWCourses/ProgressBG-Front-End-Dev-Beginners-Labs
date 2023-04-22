// Pancakes:
	// step1
	// step2
	// step3


// y = cub(x)
// X => Y
// 1 => 1
// 2 => 8
// 3 => 27

// cub(1) + cub(2)
// cub(3)
// y = 3*3*3


/* ----------------------------- Create Function ---------------------------- */

// // greet user:
// let userName='Maria';
// // Function Declaration
// function greetUser(){
// 	console.log(`*`.repeat(30));
// 	console.log(`Hello, ${userName}`);
// 	console.log(`*`.repeat(30));
// }

// // let x = 1;
// // let x; // compile time
// // x=1;   // run time

// // Function Expression
// let greetUser2 = function(){
// 	console.log(`*`.repeat(30));
// 	console.log(`Hello, ${userName}`);
// 	console.log(`*`.repeat(30));
// }

// // use functions
// greetUser()
// greetUser2()



// RAM:
// 	userName: 	0x123: 000101010101010101
// 	greetUser:  0x234: 010010010101010101

/* --------------------------- Function Parameters -------------------------- */

function greetUser(userName){
	// let userName = 'Maria';
	console.log(`*`.repeat(30));
	console.log(`Hello, ${userName}`);
	console.log(`*`.repeat(30));
}

// let userName = 'Maria';
greetUser('Maria');
// userName = 'Pesho';
greetUser('Pesho');
