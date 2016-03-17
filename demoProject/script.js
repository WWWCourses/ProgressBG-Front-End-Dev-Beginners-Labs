let input = document.querySelector('[type="number"]');
let btnCalc = document.querySelector('.btnCalc');
let output = document.querySelector('.output');

btnCalc.addEventListener('click', function () {
	let priceWithoutVAT = input.value;
	console.log( priceWithoutVAT );
	let priceWithVAT = priceWithoutVAT * 1.2;
	// let priceWithVAT = priceWithoutVAT*1 + 10;

	output.innerHTML = priceWithVAT;
})
