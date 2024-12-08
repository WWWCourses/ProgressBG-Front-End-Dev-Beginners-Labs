/* -------------------------------- For Loop -------------------------------- */
// TASK: log in console the numbers [1-3]
// console.log(1);
// console.log(2);

// for(init; condition; increment) {
//     блок
// }


// for( let x=1; x<=3;x++ ){
//     console.log(x);
// }
// console.log(`END`);

// TASK: log the sum of the numbers [1..10]
// 1,2,3,4...10

// let currentSum = 0;
// for(let x=1; x<=10; x++){
//     currentSum+=x;
// }
// console.log(currentSum);


// Task: log then numbers [5-1]
// for(let x=5; x>0; x-- ){
//     console.log(x);
// }


// console.log( '*'.repeat(30) );




/* ------------------------------- While Loop ------------------------------- */
// let i=1;
// while (i<=10) {
//     console.log(i);
//     i++;
// }

// TASK: generate random numbers[1-10], log it, untill the number 5
let x;
x = Math.ceil(Math.random()*10);
console.log(x);

while(x!==5){
    x = Math.ceil(Math.random()*10);
    console.log(x);
}







