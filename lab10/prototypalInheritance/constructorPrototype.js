function Car(speed){
	// 1. this = {}
	this.speed = speed;

	// this way we make identical copies in memory, which is not good
	// this.drive = function() {
	// 	console.log(`Drinving with ${this.speed}km/h`);
	// }
	// 2.return this
};
// this is the place to write methods:
Car.prototype.drive = function() {
	console.log(`Drinving with ${this.speed}km/h`);
}

var ford = new Car(200);
var bmw = new Car(300);

console.dir(ford.__proto__);

// 3. ford.__proto__ = Car.prototype;

console.dir(ford);
console.dir(bmw);


ford.drive(); // Drinving with 200km/h.
bmw.drive(); // Drinving with 300km/h.



