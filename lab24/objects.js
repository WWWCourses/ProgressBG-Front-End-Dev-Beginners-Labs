/* ------------------ How variables are represented in RAM ------------------ */
// let x = 1;

// let arr = [1,2];
// console.log( arr[0] );

// let obj = {
// 	"a":1,
// 	"b":2,
// };
// obj.c = 3;
// car.a = 5;


// arr[2]=3;


// // RAM:
// // 	x		:0x123: 1
// // 	arr 	:01x24:	0x345, 0x346,0x343
// // 	arr[0]  :0x345: 1
// // 	arr[1]  :0x346: 2
// // 	arr[2]  :0x343: 3
// // 	obj     :0x543: 0x456, 0x453, 0x455
// // 	obj.a   :0x456: 1
// // 	obj.b   :0x453: 2
// // 	obj.c   :0x455: 3


/* -------------------------------- Example 1 ------------------------------- */

// let arr = [1,2];
// let obj = {
// 	"0":1,
// 	"1":2,
// };
// obj.length=2;


// arr.length = 0;
// obj.length = 0;

// console.log(arr); // []
// console.log(obj);

// console.log(document);
// let x = 2+3;

// let obj = {
// 	a:2+2,
// 	b:x
// }

// console.log(obj); //{a:4,b:5}


function foo() {
	this.a = 1;
	this.b = 2;
	return 5
}

let res = new foo();
console.log(res); // {}





