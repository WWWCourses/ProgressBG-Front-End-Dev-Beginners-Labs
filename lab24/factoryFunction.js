// let students = [
// 	{
// 		name:"Pesho",
// 		addres:{
// 			country: "Bulgaria",
// 			town: "Plovdiv"
// 		},
// 		score:5
// 	},
// 	{
// 		name:"Maria",
// 		addres:{
// 			country: "UK",
// 			town: "London"
// 		},
// 		score:6
// 	},
// 	{
// 		name:"Asen",
// 		addres:{
// 			country: "Bulgaria",
// 			town: "Sofia"
// 		},
// 		score:6
// 	}
// ];

function studentFactory(name, country, town, score) {
	// new feature
	// return {
	// 	name, country, town, score
	// }

	// return {
	// 	name:name,
	// 	country:country,
	// 	town:town,
	// 	score:score
	// }

	let obj = {};

	obj.name = name;
	obj.country = country;
	obj.town = town;
	obj.score = score;

	return obj
}

let students = [];

students.push( studentFactory("Pesho","Bulgaria","Plovdiv",5) )
students.push( studentFactory("Maria","UK","London", 6) )


console.dir(students);





