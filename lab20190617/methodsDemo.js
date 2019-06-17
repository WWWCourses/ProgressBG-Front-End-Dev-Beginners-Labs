// crerate multiple objects  - constructor:
function Car(year, brand, color, doors){
    this.year = year;
    this.brand = brand;
    this.color = color;
    this.doors = doors;

    this.drive = function(){
        console.log( `${this.brand} is driving!!!` )
    }

}


let car4 = new Car(2006, "opel", "red", 5);
let car5 = new Car(2004, "BMW", "blue",3);

car4.drive();
car5.drive();
