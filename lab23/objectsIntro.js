/* ----------------------- Structure data with arrays ----------------------- */
let cars = [
	['Ford', 2019, 180, 'Black', 23000],
	['BMW', 2020, 230, 'Red', 12000]
];

// cars[0]

// function drive(car) {
// 	console.log(`${car[0]} is driving with ${car[2]}`);
// }

/* ------------------ Structure data with Class and objects ----------------- */
// Class Car:
// // Properties:
// manifacturer: String,
// Year: Number,
// Speed: Number,
// Color: String
// Price: Number
// // Methods:
// drive: function
// stop: function

// Class Motorsycle:
// properties:
// method:
// drive


let car1 = {
	manifacturer:'Ford',
	year: 2019,
	speed: 180,
	color:'Black',
	price: 23000,
	adress: {
		'country':'Bulgaria',
		'city':'Sofia'
	},
	drive: function() {
				console.log(`this: ${this}`);
				console.log(`${this.manifacturer} is driving with ${this.speed}`);
			}
};

car1.drive();


let propName = 'manifacturer';
console.log( car1.propName );//  undefined
console.log( car1[propName] );// 'Ford'


// if(car1.adress.country == 'Bulgaria'){
// 	console.log(`BG`);
// }






