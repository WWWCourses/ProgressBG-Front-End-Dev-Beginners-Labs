let basePriceInput = document.querySelector('input[name="basePrice"]');
let vatInput = document.querySelector('input[name="VAT"]');
let btnCalc = document.querySelector('.btnCalc');
let output = document.querySelector('.output');

function calcVAT(params) {

	let basePrice = basePriceInput.value; // '1000'
	let vat = vatInput.value; // '20'

	// console.log(typeof basePrice); // basePrice = '1000'

	// let priceWithVAT = basePrice * (vat/100) + basePrice;

	// Task: make it work as number
	let priceWithVAT = basePrice * (vat/100) + basePrice;



	output.innerHTML = priceWithVAT; // 1200
};

btnCalc.addEventListener('click', calcVAT)

