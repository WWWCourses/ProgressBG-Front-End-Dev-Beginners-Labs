// console.log( ("abc".toUpperCase() );//
// // console.log( (new String("abc")).toUpperCase() );//

// let str = "abc";
// let strObj = new String("abc");
// console.log( strObj.toUpperCase());

// console.log( str===strObj);

let str = "abc";
let strObj = new String("abc");
strObj.id = 1;
console.log(strObj.id);

(new String(str)).id = 1;
console.log( (new String(str)).id );