function developerFactory(n, years, skills) {
	let obj = {};

	obj.name = n;
	obj.years = years;
	obj.skills = skills;

	// let obj = {
	// 	'name': name,
	// 	'years': years,
	// 	'skills': skills
	// };

	return obj;
}


let maria = developerFactory('Maria', 23, ['CSS', 'HTML']);
let pesho = developerFactory('Pesho', 43,['JS', 'Python', 'Java']);


console.dir(maria);
console.dir(pesho);



// let maria = {
// 	'name': 'Maria',
// 	'years': 23,
// 	'skills': ['CSS', 'HTML']
// }
// let pesho = {
// 	'name': 'Maria',
// 	'years': 23,
// 	'skills': ['CSS', 'HTML']
// }