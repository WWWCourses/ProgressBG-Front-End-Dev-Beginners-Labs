// Може да съдържа само латински букви (a-z) или цифри 0-9, “.”, “-” и “_”.
// Трябва да започва с буква. Дължина от 3 до 10 символа.
let passwords = [
	'',
	'a', //no
	'abc1213', // ok
	'abc%%%%%213', // ok
	'_abc1213', // no
	'a_bc1213', // ok
	'ajdkskfdsjfdsjdskjfkjfdkjdksbc1213', // no
];

const re = /^[A-Za-z][A-Za-z0-9_.-]{3,10}$/;

passwords.forEach( pass => {
	console.log( re.test(pass) ? 'ok': 'no' );
})