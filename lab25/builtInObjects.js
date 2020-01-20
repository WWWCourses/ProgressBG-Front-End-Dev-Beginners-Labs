// function foo(x) {
//     return Math.round( Math.abs(x) );
// };

// console.log( foo(-2.43) ); // 2
// console.log( foo(-2.53) ); // 3


// let currentDate = new Date();
// console.dir(currentDate.getFullYear() );

// We have 2 functions doing a same task: calculate the sum of all positive even numbers in a given range. But the algorithm for each of them is different.
// function calcEvenNumbersSum_1(start, end) {
// 	var sum = 0;

// 	for (var i = start; i <= end; i += 2) {
//         sum = i % 2 == 0 ? sum += i : sum;
// 	}
// 	console.log(`calcEvenNumbersSum_1 result is: ${sum}`);
// }

// function calcEvenNumbersSum_2(start, end) {
// 	var sum = 0;

// 	for (var i = start; i <= end; i++) {
// 		if (i % 2 == 0) {
// 			sum += i;
// 		}
// 	}
// 	console.log(`calcEvenNumbersSum_2 result is: ${sum}`);
// }

// // So lets compare which of the two functions is faster (NB! This test is very rough, and is not reliable for real-world algorithm speed tests.)
// // let's time the calcEvenNumbersSum_1() execution:
// var timeStart = Date.now();
// calcEvenNumbersSum_1(1, 1000000);
// var timeEnd = Date.now();
// console.log(`Time taken for calcEvenNumbersSum_1 = ${timeEnd - timeStart}ms.`);

// // let's time the calcEvenNumbersSum_2() execution:
// timeStart = Date.now();
// calcEvenNumbersSum_2(1, 1000000);
// timeEnd = Date.now();

// console.log(`Time taken for calcEvenNumbersSum_2 = ${timeEnd - timeStart}ms.`);

// const add = function() {
//     console.dir( arguments );

//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }
//     return sum;
// }

// console.log( add(2,3) );//
// console.log( add(2,3,4) );// 9

let userName = "addRkjkdaDWDWWd";
let firstLetter = userName[0].toUpperCase();
let restLetters = userName.substring(1,).toLowerCase();

console.log( firstLetter + restLetters);


