// Animal constructor
const Animal = function(name, food){
    this.name = name;
    this.food = food;
}
Animal.prototype.eat = function(){
    console.log(`${this.name} is eating ${this.food}`);
}

// Cat constructor
const Cat = function(name, food){
	// TODO: HW how to reuse Animal Constructor, and not copy-paste
	this.name = name;
    this.food = food;
}
// Cat objects inherits from Animal:
Cat.prototype = Object.create(Animal.prototype);
// obj = Object.create(prototypeObject)
// // obj.__proto__ = prototypeObject

// Cat own methods:
Cat.prototype.mayo = function () {
	console.log(`${this.name} mayooooooo`);
}

// create tom object:
const tom = new Cat('Tom', 'cheese');

// use tom:
tom.mayo();
tom.eat();
