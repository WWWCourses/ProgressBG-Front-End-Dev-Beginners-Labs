let creature = {
	greet:function () {
		console.log(`${this.name} says hello`);
	}
}
let animal = {
	'name': 'Any',
	'eat': function() {
		console.log(`${this.name} is eating ${this.food}`);
	},
	// '__proto__':creature
}

let cat = {
	'name':'Tom',
	'food':'milk',
	// the cat is an animal AND a creatur - > not htis way
	'__proto__': { ...creature, ...animal}
	// '__proto__': animal
}

let dog = {
	'name':'Sharo',
	'food':'meat',
	'__proto__': animal
}

cat.eat();
cat.greet();

dog.eat();