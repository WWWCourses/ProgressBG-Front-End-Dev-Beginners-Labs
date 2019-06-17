// crerate multiple objects  - stupid way:
var car1 = {
    "brand" : "ford",
    "year"  : 2016,
    "color" : "red",
    "doors" : 3
}

var car2 = {
    "brand" : "bmw",
    "year"  : 2018,
    "color" : "black",
    "doors" : 5
}

// console.log( car1.year );
// console.log( car2.year );

// add elements to array:
let arr = [];
arr[0]=1;
arr[1]=2;
// console.log( arr )

// add elements to car object:
var car3 = {};

car3.year = 2010;
car3.brand = "opel";
car3.color = "red";
car3.doors = 5;

// console.log( car1 );
// console.log( car3 );


// crerate multiple objects  - with Factory :
function carFactory(year, brand, color, doors) {
    var obj = {};

    obj.year = year;
    obj.brand = brand;
    obj.color = color;
    obj.doors = doors;

    return obj;
}

// crerate multiple objects  - constructor:
function Car(year, brand, color, doors){
    this.year = year;
    this.brand = brand;
    this.color = color;
    this.doors = doors;
}


let car4 = new Car(2006, "opel", "red", 5);
let car5 = new Car(2004, "BMW", "blue",3);

// let car4 = carFactory(2006, "opel", "red", 5);
// let car5 = carFactory(2004, "BMW", "blue",3);

console.log ( car4.year );
console.log ( car5.year );


