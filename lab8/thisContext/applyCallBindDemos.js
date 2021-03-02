function __update(name, age){
	console.log(`@@@@@@`);
    this.name = name;
    this.age = age;
}

let obj = {};


// func.call(obj, arg1, arg2, ...)
// func.apply(obj, [argsArray])
// func.bind(thisArg, arg1, arg2)

const maria = {
	name: "Maria",
	age:18,
	update:function( name, age) {
		let args = [name,age];
		// __update.apply(this,args);
		// __update.call(this,name,age);
		// let x = _update.bind(this,name,age);
		// x();
	}
};


console.log(maria.age);
maria.update('Maria Popova', 100);
console.log(maria.age); //

console.dir(obj);
