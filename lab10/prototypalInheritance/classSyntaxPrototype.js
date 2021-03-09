class Car{
	// Constructor
	constructor(speed){
		this.speed = speed;
	}
	// Methods:
	drive() {
		console.log(`Drinving with ${this.speed}km/h`);
	}
}

// // Constructor
// function Car(speed){
// 	this.speed = speed;
// };

// // Methods:
// Car.prototype.drive = function() {
// 	console.log(`Drinving with ${this.speed}km/h`);
// }

var ford = new Car(200);
var bmw = new Car(300);

// 3. ford.__proto__ = Car.prototype;

ford.drive(); // Drinving with 200km/h.
bmw.drive(); // Drinving with 300km/h.



