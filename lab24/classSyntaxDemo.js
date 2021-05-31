// THIS IS TOPIC FROM ADVANCED COURSE
class Student{
	constructor(name, country, town, score) {
		this.name = name;
		this.country = country;
		this.town = town;
		this.score = score;
	}
}

console.log( typeof Student);

let students = [];


let pesho =  new Student("Pesho","Bulgaria","Plovdiv",5);
console.dir(pesho.name);




// students.push( studentFactory("Pesho","Bulgaria","Plovdiv",5) )
// students.push( studentFactory("Maria","UK","London", 6) )


// console.dir(students);





