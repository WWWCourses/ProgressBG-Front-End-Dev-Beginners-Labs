/* -------------------------------- OOP Intro ------------------------------- */
// Procedural programming
// function driveCar(car) {

//    console.log(`The ${car[3]} ${car[0]} is driving with ${car[2]}`);
// };


// let car1 = ['Ford', 2000, 250, 'red'];
// let car2 = ['Opel', 2020, 220, 'white'];


// driveCar(car1);
// driveCar(car2);

// // OOP
// class Car{
//     constructor(model, year, speed, color){
//         // property
//         this.model = model;
//         this.year = year;
//         this.speed= speed;
//         this.color= color;
//     }
//     // methods
//     drive(){
//         console.log(`The ${this.color} ${this.model} is driving with ${this.speed}`);
//     }
// }

// let car1 = new Car('Ford', 2000, 250, 'red');
// let car2 = new Car('Opel', 2020, 220, 'white');

// car1.drive();
// car2.drive();

/* ------------------------------ Object in JS ------------------------------ */
// define student1 object:
// let student1 = {
//     "surName" : "Petrov",
//     "firstName" : "Pesho",
//     "greet": function() {
//       console.log(`Hello, I'm ${this.firstName}`);
//     }
// };

// let student2 = [
//     "Pesho",
//     "Petrov",
//     function() {
//         console.log(`Hello, I'm ${this.firstName}`);
//     }
// ];

// console.log(student1);
// console.log(student2);

// // RAM:

// student1:
// student.firstName: Pesho
// student.surName: Petrov
// student.greet: [function]

// student2:
// student2[0]: Pesho
// student2[1]: Petrov
// student2[2]: [function]

// let dictionary = {
//     'apple': 'ябълка',
//     'banana': 'банан',
//     'orange': 'портокал'
// };

// console.log( dictionary.apple );



/* --------------------------- Access object data --------------------------- */
// Variant1: Dot notation: obj.propName
// let obj = {
//     // properties
//     "x":1,
//     y:'a',
//     c:[1,2,3],
//     // method
//     z: function() {
//         console.log(`ZZZZZZ`);
//     },
//     "a-2":222
// };
// console.log(obj);

// console.log(obj.x);
// console.log(obj.c[1]);
// console.log(obj.a);
// console.log(obj."a-2");// NaN

// square brackets: obj[expr]
// console.log(obj["a-2"]);

// let car1 = {
//     model:'Ford',
//     year:2000,
//     spee:250,
//     color:'red'
// };
// let userChoice = 'model';
// console.log( car1.userChoice );//
// // console.log( car1['model'] );//
// console.log( car1[userChoice] );//

/* ------------------------------ About 'this' ------------------------------ */
// function dirveCar() {
//     console.log(`The ${this.color} ${this.model} is driving with ${this.speed}`);
// };

// let car1 = {
//     model:'Ford',
//     year:2000,
//     speed:250,
//     color:'red',
//     drive:dirveCar
// };

// let car2 = {
//     model:'Opel',
//     year:2023,
//     speed:350,
//     color:'red',
//     drive:dirveCar
// };

// // const car1Arr = ['Ford',2000,250,'red'];
// // console.log(this);
// // console.log(car1);
// // console.log(car1Arr);

// dirveCar();
// car1.drive();
// car2.drive();


/* ------------------- Create multiple (same type) objects ------------------ */
// With literals - not good for many objects
// let car1 = {
//     model:'Ford',
//     year:2000,
//     speed:250,
//     color:'red',
//     drive:function() {
//         console.log(`The ${this.color} ${this.model} is driving with ${this.speed}`);
//     }
// };

// let car2 = {
//     model:'Opel',
//     year:2023,
//     speed:350,
//     color:'red',
//     drive:function() {
//         console.log(`The ${this.color} ${this.model} is driving with ${this.speed}`);
//     }
// };

// "Factory" function
// function carFactory(model, year, speed, color) {
//     let obj = {};

//     obj.model = model;
//     obj.year = year;
//     obj.speed = speed;
//     obj.color = color;
//     obj.drive = function() {
//         console.log(`The ${this.color} ${this.model} is driving with ${this.speed}`);
//     }
//     return obj;
// }

// let car1 = carFactory('Ford',2000, 250, 'red' );
// let car2 = carFactory('Opel',2023, 350, 'red' );
// car1.drive();
// car2.drive();

// "Constuctor" Function
// function foo() {
//     //1.this = {}
//     console.log(`Foo`);
//     return 5;
//     //2. return this
// }

// // console.log( foo() );
// console.log(new foo() );

// function Car(model, year, speed, color) {
//     this.model = model;
//     this.year = year;
//     this.speed = speed;
//     this.color = color;
// };
// Car.prototype.drive = function() {
//     console.log(`The ${this.color} ${this.model} is driving with ${this.speed}`);
// }

// let car1 = new Car('Ford',2000, 250, 'red' );
// let car2 = new Car('Opel',2023, 350, 'red' );
// car1.drive();
// car2.drive();


// Class syntax

// class Car{
//     constructor(model, year, speed, color) {
//         this.model = model;
//         this.year = year;
//         this.speed = speed;
//         this.color = color;
//     }
//     drive() {
//         console.log(`The ${this.color} ${this.model} is driving with ${this.speed}`);
//     }
// }
// console.dir(typeof Car);


// let car1 = new Car('Ford',2000, 250, 'red' );
// let car2 = new Car('Opel',2023, 350, 'red' );
// car1.drive();
// car2.drive();


// console.dir(car1);
// console.dir(car2);

// const Math = {
//     PI:55,
//     abs:function(x) {
//         return +x;
//     }
// }
// console.dir( Math.abs(-5) );


