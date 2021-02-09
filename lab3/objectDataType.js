/* -------------------------------------------------------------------------- */
/*                          primitives are immutable                          */
/* -------------------------------------------------------------------------- */
// let x = 5;
// x = 3;

// let arr = [5,6];
// console.log( arr["length"] ); // 1
// console.log( arr.length ); // 1

// let obj = {
// 	"x":5,
// 	"y":6
// }
// obj.x = 3;
// // console.log( obj["length"] ); // undefined

// console.dir(arr);
// console.dir(obj);


// RAM: Global Scope
// 0x02332:    00000101 (5) <from line1>
// 0x02334: x => 00000011 (3) <from line2>

// 0x12331: arr =>
// 		0x12332: arr["0"]=> 00000101 (5)
// 		0x12333: arr["length"] => 00000001 (1)

// 0x12551: obj =>
// 		0x12552: obj["x"] => 00000011 (3) <from line9>


/* -------------------------------------------------------------------------- */
/*                            functions are objects                           */
/* -------------------------------------------------------------------------- */
// let x = 0;
// let obj = {};
// let arr = [];
// let foo = function(x){
// 	console.log(x**2);
// };

// console.dir(obj);
// console.dir(arr);
// console.dir(foo);

// let bar = foo;
// bar.id = 5;
// console.log( foo.id ); // 5


/* -------------------------------------------------------------------------- */
/*                                   arrays                                   */
/* -------------------------------------------------------------------------- */
// let arr = [];
// arr[0] = 9;
// arr[1]= "ada";

/* ------------------------------- typed array ------------------------------ */
// const typedArray1 = new Int8Array(8);
// typedArray1[0] = "ada";
// console.dir(typedArray1);

/* ---------------------------------- Maps and Sets ---------------------------------- */
// dictionary (Object data type)
let fruits1 = {
	"orange":"портокал",
	"apple":"ябълка"
}
console.dir(fruits1);

// ordered dictionary (Map data type)
let fruits2 = new Map();
fruits2.set('orange', "портокал");
fruits2.set('apple', "ябълка");
console.dir(fruits2);

// Sets data type
let data1 = [1,2,1,2,1,4,1,1,1,1,1,1];
let dataSet = new Set(data1);
console.log(dataSet);

