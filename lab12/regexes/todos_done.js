// match if a string contains 'a' and 'b' and 'c', order or length do not matter
const testStrings = [
	'ab',
	'a-b-c',
	'c---bb-a',
	'b--a'
];

console.log(`variant 1 : using one regex`);
const re = /(?=.*a)(?=.*b)(?=.*c)/;
testStrings.forEach(str=>{
	let matched = re.test(str);
	console.log(`'${str}' => ${matched}`)
});

console.log(`variant 2: using multiple regex tests`);
const re1 = /a/;
const re2 = /b/;
const re3 = /c/;
testStrings.forEach( str=> {
	let matched = re1.test(str) && re2.test(str) && re3.test(str);
	console.log(`'${str}' => ${matched}`)
})
