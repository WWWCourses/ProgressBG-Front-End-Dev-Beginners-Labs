/* -------------------------------------------------------------------------- */
/*                        primitive data types overview                       */
/* -------------------------------------------------------------------------- */
// let x = -3.14;
// let y = 5;
// // let y = 5.0;
// // let y = +5;

// // let str = "5";
// // let str = '5';
// let str = `5`;

// let sym1 = Symbol();

// console.log(`typeof sym1: ${typeof sym1}`);

// GLOBAL:
// 012332: x
// 012338: y (00000101=>5)
// 012362: str ( 010101010 =>'5')

/* -------------------------------------------------------------------------- */
/*                              primitives boxing                             */
/* -------------------------------------------------------------------------- */
let str = "Ada";
let strObj = new String(str);

// look at the browser's console
console.dir(str);
console.dir(strObj);

// strObj.id = 1;
// console.log( strObj.id ); // 1, as strObj IS AN OBJECT

// console.log( str.toUpperCase() ); // str IS NOT AN OBJECT, but works because of boxing

// str.id = 1;
// (new String("Ada")).id = 1; // {0:"A",..., id:1,length:4}
// console.log( str.id ); // undefined, because str IS NOT AN OBJECT




