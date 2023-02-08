
/* ----------------------- with "Constuctor" Function ----------------------- */
class Car{
	constructor(speed,price,model, year){
		this.speed=speed;
		this.model=model;
		this.year=year;
		this.price=price;
	}
	drive(){
		console.log(`${this.model} is driving with ${this.speed}`);
	}
}


let cars = [
	new Car(230, 12000,'Ford', 2020),
	new Car(250, 23000,'BMW', 2019),
	new Car(80, 400,'Opel', 1998),
];

// cars[2].drive();

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


