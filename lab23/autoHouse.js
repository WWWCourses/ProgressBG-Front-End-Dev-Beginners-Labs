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

let cars = [
	{
		manifacturer:'Ford',
		speed:180,
	},
	{
		manifacturer:'Opel',
		speed:280,
	},
	{
		manifacturer:'BMW',
		speed:210,
	}
];

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


