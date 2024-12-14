// let user1 = [32, 'Ada'];

// let user2Age = 34;
// let user2Name = 'Pesho';

// console.log(user2Name);
// console.log(user1);

// RAM:
//     user1: 0x123, 0x143
//     user1[0]:0x123: 32
//     user1[1]:0x143: 'Ada'

//     user2Age:0x123: 34
//     user2Name:0x143: 'Pesho'

// let fruit1 = 'apple';
// fruit1 = 'APPLE';
// let fruit2 = 'banana';

// let fruits = ['apple', 'banana'];
// // 'apple' => 'APPLE'
// fruits[0] = 'APPLE';
// console.log(fruits);


// let arr = [1,2,3,4,5];
// console.log( arr[3-2] ); //2
// console.log( arr[4] ); //5
// console.log( arr[arr[3]] ); //5
// console.log( arr[10] );//

// arr[10] = 11;
// console.log(arr);

/* ---------------------------- Array as Objects ---------------------------- */
// let arr = [1,2,3,4,5];
// console.log( arr['a'] );// ?
// arr['a'] = 'A';
// console.log(arr);


// let arr = [1,2,3];
// console.log( arr.length );//3

// // insert 9 at beginning
// arr.unshift(9);

// console.log(arr); // [ 9, 1, 2, 3 ]
// console.log(arr.length);//4

// arr.shift();
// console.log(arr);

// arr.length = 0;
// console.log(arr);


// let arr = [1,2,3];
// arr.length = 2;
// // RAM:
// //     arr[0]:0x123: 1
// //     arr[1]:0x124: 2

// //     arr.length:0x432: 2

// console.log(arr);
// console.log(arr.lenght);

// let arr = ['a', 'b', 'c'];
// console.log(arr[arr.length-1]);

/* ------------------------------- Use arrays ------------------------------- */
// let userNumbers = [1,2,3];
// // TASK: log each element
// for(let i=0; i<userNumbers.length; i++){
//     console.log(userNumbers[i]);
// }
// console.log(`END`);

// for (let index = 0; index < userNumbers.length; index++) {
//     const number = userNumbers[index];
//     console.log(number);
// }

// TASK: log reverse numbers
// let userNumbers = [1,2,3];
// for(let i = userNumbers.length-1; i>=0 ;i--){
//     console.log(userNumbers[i]);
// }

// let arr = [1,'a', [2,3]];
// console.log(arr.length);//3
// console.log( arr[2] );    //[2,3]
// console.log( arr[2][1] );//3
// arr[0] = '@'
// console.log(arr);

// RAM:
//        arr: 0x122:0x123, 0x124
//     arr[0]: 0x123: 1
//     arr[1]: 0x124: 'a'
//     arr[2]: 0x436: 0x438,0x439
//   arr[2][0]:0x438:2
//   arr[2][1]:0x439:3

// let otherArr = arr[2];
// console.log(otherArr);//[2,3]
// console.log(otherArr[1]);

// let numbers = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];
// console.log(numbers[1][2]);// 6


// // 8=>'@'
// numbers[2][1] = '@';
// console.log(numbers);

// let numbers = [
//     [1,2],
//     [3,4]
// ];

// for (let i = 0; i < numbers.length; i++) {
//     const arr = numbers[i]; //[ 1, 2 ]
//     // console.log(arr);
//     for (let j = 0; j < arr.length; j++) {
//         console.log(arr[j]);
//     }
// }




//1
//2
//3
//4
