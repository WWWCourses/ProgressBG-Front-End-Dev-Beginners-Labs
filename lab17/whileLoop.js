/* --------------------------------- basics --------------------------------- */
// This is not a good use case for while:
// let i = 1;
// while ( i<=5 ) {
// 	// блок, който се изпълнява, докато condition е истина
// 	console.log(i);
// 	i+=1;
// }
// console.log(`END`);

// Good use case for while loop:
// TASK: generate and log random numbers [1,10], untill 3 is generated
// let x = Math.round( Math.random() *10 );
// console.log(x);

// while (x!==3) {
// 	x = Math.round( Math.random() *10 );
// 	console.log(x);
// }

// do-while:
// do {
// 	x = Math.round( Math.random() *10 );
// 	console.log(x);
// } while (x!==3);


/* ----------------------- Break and Conitnue Examples ---------------------- */
// // TASK: log numbers from 1 to 10, but stop if number is divisible 3:
// for(let i = 1; i<=10; i++){
// 	console.log(i);
// 	if(i%3===0){
// 		break;
// 	}
// }
// console.log(`END`);

// TASK: log numbers from 1 to 10, skip if number is divisible 3:
// for(let i = 1; i<=10; i++){
// 	if(i%3===0){
// 		continue;
// 	}
// 	console.log(i);
// }
// console.log(`END`);






