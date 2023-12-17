/* ---------------------------- "Factory" Function ---------------------------- */
// function objFactory(a,b) {
// 	return {
// 		a:a,
// 		b:b
// 	}
// }

// let obj1  = objFactory(1,2);
// let obj2  = objFactory(11,22);

// console.log(obj1);
// console.log(obj2);

/* ------------------------- "Constructor" Function ------------------------- */
function SimpleObject(a,b) {
	//1. let this = {};
	this.a = a;
	this.b = b;
	//2. return this
}

let obj1  = new SimpleObject(1,2);
let obj2  = new SimpleObject(11,22);

console.log(obj1); //
console.log(obj2);


