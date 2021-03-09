let obj = {
	id:1
}

// let obj2 = {};
// obj2.__proto__ = obj;
let obj2 = Object.create( obj );
console.dir(obj2);
