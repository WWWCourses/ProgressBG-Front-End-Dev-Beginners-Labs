// console.log(1);
// console.log(2);
// console.log(3);

// console.log(x);

/* -------------------------------- FOR LOOP -------------------------------- */
// for (init; condition; increment) {
// 	block
// }

// for(let i=1; i<=5; i++) {
// 	console.log(i);
// }

// console.log(`END`);

// RAM:
// 	i:0233:1


// OUTPUT:
// 	1
//  3
//  END


// TASK : sum numbers [1..5]:
// 1,2,3,4,5
// tmp = 0

// tmp = tmp +1
// tmp = tmp +2
// tmp = tmp +3
// tmp = tmp +4
// tmp = tmp +5

// let sum = 0;
// for(let i=1; i<=5; i++){
// 	sum = sum + i;
// }

// console.log(`sum=${sum}`);


/* -------------------------- TASK : print asterics ------------------------- */

// console.log( '*'.repeat(1));
// console.log( '*'.repeat(2));
// console.log( '*'.repeat(3));
// console.log( '*'.repeat(4));
// console.log( '*'.repeat(5));


/* ------------------------------- WHILE LOOP ------------------------------- */
// let x = 8;
// while (x>0) {
// 	console.log(x);
// 	x--;
// }




// TASK: generate user number, untill the number is 5

// let userNumber = Math.random()*10;
// userNumber = Math.ceil(userNumber)

// while (userNumber!==5){
// 	userNumber = Math.random()*10;
// 	userNumber = Math.ceil(userNumber)
// 	console.log( userNumber );
// }

let userNumber;
do{
	userNumber = Math.random()*10;
	userNumber = Math.ceil(userNumber)
	console.log( userNumber );
}while (userNumber!==5)




// console.log(`Please, enter number 5`);