// let priceWithoutVat = 100;
// let coef = 1.2;

// console.log( priceWithoutVat * 1.2);

let input = document.querySelector('#price');
let button = document.querySelector('button');
let output = document.querySelector('.output');
let coef = 1.2;

button.addEventListener('click', function() {
	let priceWithoutVat = input.value;
	let priceWithVat = priceWithoutVat * coef ;

	console.log( priceWithVat );
	output.innerHTML = priceWithVat;
});