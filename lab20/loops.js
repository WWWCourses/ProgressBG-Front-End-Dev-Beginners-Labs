
// for (init; condition; increment) {
// 	блок, който се изпълнява, докато condition
// 	е истина
// }


// for(let i = 3; i>0 ; i--){
// 	console.log(`hi`);
// }
// console.log(`END`);



// for(let i=3; i<=3; i--){
// 	console.log(i);
// }

// i=3
// 3<=3 => log(3)
// i=2
// 2<=3 => log(2)
// i=1
// 1<=3 => log(1)
// i=0
// 0<=3 => log(0)
// i=-1
// -1<=3 => log(-1)
//.......



// console.log(1);
// console.log(2);
// console.log(3);
// for(let i=1; i<=3 ;i++){
// 	console.log(i);
// }

// for(let i=2; i<=10; i+=2){
// 	console.log(i);
// }

// Algorithm of sum:
// sum = 0
// i : 1,2,3,4,5
// sum=sum+i

// let sum = 0;
// for(let i = 1; i<=3; i++){
// 	sum=sum+i;
// 	console.log(`sum=${sum}`);
// };


// console.log( '*'.repeat(1) );
// console.log( '*'.repeat(2) );
// console.log( '*'.repeat(3) );
// console.log( '*'.repeat(4) );
// console.log( '*'.repeat(5) );


/* ------------------------------- while loop ------------------------------- */
// let i = 1;
// while( i<=3 ) {
// 	console.log(i);
// 	i++
// }


// let x = 0.234;
// Math.ceil(x)
// Math.floor(x)


// "guess the number" demo
// let count = 1;

// let machine_number = Math.ceil(Math.random()*10);
// console.log(machine_number);

// let user_number;
// do{
// 	user_number = Math.ceil(Math.random()*10);
// 	console.log(user_number);
// 	count++;
// }while( machine_number !== user_number);

// console.log(`Bravo, you guess from ${count} times`);



// while(cond){
// 	// actions
// }

// do{
// 	// actions
// }while(cond);



// break && continue
// let x = 0;
// while(x<10){
// 	x++;
// 	if(x===5){
// 		continue;
// 	};
// 	console.log(x);

// };
// console.log(`END`);

// let res = x==3?1:2