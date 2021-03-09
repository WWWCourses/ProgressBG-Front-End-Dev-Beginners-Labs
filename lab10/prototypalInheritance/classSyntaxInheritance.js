// Animal class
class Animal{
	constructor(name, food){
		this.name = name;
    	this.food = food;
	}

	eat(){
		console.log(`${this.name} is eating ${this.food}`);
	}
}

class Cat extends Animal{
	constructor(name, food, tail){
		super(name, food); // call the parent constructor
		this.tail = tail;
	}
	mayo() {
		console.log(`${this.name} mayooooooo`);
	}
}

// create tom object:
const tom = new Cat('Tom', 'cheese', 40);

// use tom:
tom.mayo();
tom.eat();
