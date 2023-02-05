/* ----------------- with literals - non efective, bug prone ---------------- */
// let obj1 = {
// 	id:'a'
// };
// let obj2 = {
// 	id:'b'
// };
// let obj3 = {
// 	id:3
// };


/* -------------------------- with Factory function ------------------------- */
// function objFactory(id){
// 	return {
// 		id:id
// 	}
// };

// function objFactory(id){
// 	let obj = {};

// 	obj.id = id;

// 	return obj;
// };

// let obj1 = objFactory('a');
// let obj2 = objFactory('b');
// let obj3 = objFactory(3);

// console.log(obj1);
// console.log(obj2);
// console.log(obj3);

/* -------------------------- with "Constructor" function ------------------------- */
// console.log( this );
// function Obj(id){
// 	// this={}
// 	this.id = id;
// 	// return this
// };

// let obj4 = new Obj('a'); //
// let obj5 = new Obj('b');
// let obj6 = new Obj(3);

// console.log(obj4); // ?
// console.log(obj5);
// console.log(obj6);


// function sum(x,y) {
// 	return x+y
// };

// let res1 = sum(2,3);
// let res2 = new sum(2,3);
// console.log( res1 );
// console.log( res2 );

/* ---------------------- with Class syntax (from ES6) ---------------------- */
// class Obj{
// 	constructor(id){
// 		this.id = id;
// 	}
// }
// console.log( typeof(Obj) );

// let obj4 = new Obj('a');
// let obj5 = new Obj('b');
// let obj6 = new Obj(3);


// console.log(obj4); // ?
// console.log(obj5);
// console.log(obj6);

