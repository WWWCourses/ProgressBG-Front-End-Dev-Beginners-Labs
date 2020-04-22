let basePriceInput = document.querySelector('input[name="basePrice"]');
let vatInput = document.querySelector('input[name="VAT"]');
let btnCalc = document.querySelector('.btnCalc');
let output = document.querySelector('.output');

function calcVAT(params) {

	let basePrice = basePriceInput.value*1;
	let vat = vatInput.value;

	let priceWithVAT = basePrice * (vat/100) + basePrice;
	// 1000 * 0.2 + 1000
	// 200 + 1000

	// 2001000

	output.innerHTML = priceWithVAT;
};

btnCalc.addEventListener('click', calcVAT)

