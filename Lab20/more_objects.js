// let str = 'abc';
// str.toLowerCase();
// (new String(str)).toLowerCase();


// let x = 1;
// x = 3;
// x = 4;


// let obj = {x:1}
// obj.x = 5;

// RAM:
//     stack:
//      :0x123: free
//      :0x122: 5
//     x:0x112: 4
//     heap:
//     obj:0x132: 0x122


/* ------------------- Copy by value vs Copy by reference ------------------- */
// let x = 1;
// let y = x;
// x = 5;
// console.log(x);
// console.log(y);

// let obj1 = {x:1};
// let obj2 = obj1;
// obj1.x = 5;
// console.log(obj1);
// console.log(obj2);



// stack:
//     x:5
//     y:1
// heap:
//    obj1: 0x123 ({x:5})
//    obj2: 0x123



// let obj = {

// }


// // car1 is instance of Car
// let car1 = new Car();