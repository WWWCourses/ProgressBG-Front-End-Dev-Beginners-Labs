// CAR:
// // propertes:
// 	price: Number
// 	speed: Number
// 	model: String
// 	year: Number
// // methods
// 	drive: function,


// TASK: Find the model and price of car with max speed;
/* --------------------- create cars with Objec Literals -------------------- */
// let cars = [
// 	{
// 		price: 12000,
// 		model: 'Ford',
// 		speed: 220,
// 		year: 2020,
// 		drive: function() {
// 			console.log(`${this.model} is driving with ${this.speed} km/h`);
// 		}
// 	},
// 	{
// 		price: 23000,
// 		speed: 250,
// 		model: 'BMW',
// 		year: 2019,
// 		drive: function() {
// 			console.log(`${this.model} is driving with ${this.speed} km/h`);
// 		}
// 	},
// 	{
// 		price: 4000,
// 		speed: 180,
// 		model: 'Opel',
// 		year: 1998,
// 		drive: function() {
// 			console.log(`${this.model} is driving with ${this.speed} km/h`);
// 		}
// 	}
// ];


/* ----------------- careate cars with car factory function ----------------- */
function carFactory(speed,price,model, year) {
	return {
		speed:speed,
		model:model,
		year:year,
		price:price,
	}
}

let cars = [
	carFactory(230, 12000,'Ford', 2020),
	carFactory(250, 23000,'BMW', 2019),
	carFactory(180, 400,'Opel', 1998),
];

/* ----------------------- with "Constuctor" Function ----------------------- */


// Main logic
let maxSpeed = cars[0].speed;
let carWithMaxSpeed=null;

for (let i = 0; i < cars.length; i++) {
	const car = cars[i];
	if(car.speed>=maxSpeed){
		maxSpeed=car.speed;
		carWithMaxSpeed = car;
	}
};

// console.log(carWithMaxSpeed);
console.log(`${carWithMaxSpeed.model} has max speed of: ${carWithMaxSpeed.speed}`);






// let x = 2;
// let y = 5;
// let z = 6;
// let numbers = [2,8,6];
// let maxNumber = numbers[0];

// for (let i = 0; i < numbers.length; i++) {
// 	const number = numbers[i];
// 	if(number>=maxNumber){
// 		maxNumber=number;
// 	}
// }
// console.log(maxNumber);

