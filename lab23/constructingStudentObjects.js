
function developerFactory(name, years, skills) {
	return {
		'name': name,
		'years': years,
		'skils': skills,
	}
}


let students = [
	developerFactory('Maria', 23, ['CSS', 'HTML']),
	developerFactory('Pesho', 43,['JS', 'Python', 'Java'])
]

console.log( students.[0] );


console.log();


