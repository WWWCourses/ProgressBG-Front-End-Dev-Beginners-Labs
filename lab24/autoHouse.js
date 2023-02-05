// TASK: Given data for 3 cars. Log the car which has max speed
// Varaint 1:
// let cars = {
// 	manifacturer:['Ford','BMW', 'Opel'],
// 	speed: [180, 210, 170],
// 	getMaxSpeedCar: function() {
// 		let maxSpeed = 0, maxIndex = 0;
// 		for (let i = 0; i < this.speed.length; i++) {

// 			const speed = this.speed[i];


// 		}
// 	}
// };

// let cars = [
// 	{
// 		manifacturer:'Ford',
// 		speed:180,
// 	},
// 	{
// 		manifacturer:'Opel',
// 		sped:280,
// 	},
// 	{
// 		manifacturer:'BMW',
// 		speed:210,
// 	}
// ];


function carFactory(manifacturer, speed) {
	// return {
	// 	manifacturer:manifacturer,
	// 	speed: speed
	// }
	// return {manifacturer, speed} // from ES6

	// let obj = {};
	// obj.manifacturer=manifacturer;
	// obj.speed = speed;
	// return obj;
}

// let cars = [
// 	carFactory('Ford',180),
// 	carFactory('Opel',280),
// 	carFactory('BMW',210),
// ];



/* ----------------------- with "Constructor" function ---------------------- */
// function Car(manifacturer, speed) {
// 	// this = {}
// 	this.manifacturer = manifacturer;
// 	this.speed = speed;
// 	// return this
// };

/* ---------------------- with Class syntax (from ES6) ---------------------- */
class Car{
	constructor(manifacturer, speed){
		this.manifacturer = manifacturer;
		this.speed = speed;
	}
};

let car1 = new Car('Ford', 200);
// car1 is instance of class Car

let cars = [
	new Car('Ford',180),
	new Car('Opel',280),
	new Car('BMW',210),
];

console.log( cars );


function getMaxSpeedCar(cars) {
	let maxSpeed = 0;
	let carWithMaxSpeed;

	for (let i = 0; i < cars.length; i++) {
		var car = cars[i];
		if(car.speed>maxSpeed){
			maxSpeed=car.speed;
			carWithMaxSpeed=car;
		}
	};

	return carWithMaxSpeed.manifacturer;
}

console.log( getMaxSpeedCar(cars) );


