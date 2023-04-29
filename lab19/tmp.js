function foo() {
	// this = {}
	console.log(`Hi`);

	//return this
}
console.dir( foo );



// let obj1 = foo();
// console.log( obj1 );// undefined

// let obj2 = new foo();
// console.log( obj2 );// {}