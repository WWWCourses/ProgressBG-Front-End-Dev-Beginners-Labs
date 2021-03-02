function Constructor(id) {
	this.id = id;
	this.saidHello = 0;

	// auxilary function
	function incrSedHello(that) {
		that.saidHello++;
	};

	// method
	this.sayHello = function () {
		incrSedHello(this);
		console.log(`Obj ${id} said hello ${this.saidHello} times`);
	};
}

var obj1 = new Constructor(1);
var obj2 = new Constructor(2);

obj1.sayHello(); // this.saidHello = 1
obj1.sayHello(); // this.saidHello = 2

obj2.sayHello(); // this.saidHello = 1
obj2.sayHello(); // this.saidHello = 2
obj2.sayHello(); // this.saidHello = 3


// console.log( window.saidHello); // 5