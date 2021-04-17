// Animal constructor
const Animal = function(name, food){
    this.name = name;
    this.food = food;
}
// Animal methods
Animal.prototype.eat = function(){
    console.log(`${this.name} is eating ${this.food}`);
}

// Create a Cat Constructor, which will inherit all methods from Animal:
// <<<<< your code start here
const Cat = function (name, food) {
	// reuse parent constructor
	Animal.call(this,name,food);
}
// inherit all parent's methods
Cat.prototype = Object.create(Animal.prototype);
// >>>>> your code ends here

// create tom object:
const tom = new Cat('Tom', 'cheese');

// use tom:
tom.eat();

// expected output:
// Tom is eating cheese