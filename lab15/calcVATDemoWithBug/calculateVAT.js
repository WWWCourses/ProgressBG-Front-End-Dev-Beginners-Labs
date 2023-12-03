let btn = document.querySelector('button');
let output = document.querySelector('.output');
let priceWithoutVATInput = document.querySelector('#priceWithoutVAT');
let bgVatInput = document.querySelector('#bgVat');

btn.addEventListener('click', function(e){
	let priceWithoutVat = priceWithoutVATInput.value * 1;
	const VAT = bgVatInput.value * 1;

	console.log(typeof priceWithoutVat);
	console.log(typeof VAT);

	let priceVAT =  priceWithoutVat * (VAT/100) ;
	let priceWithVAT = priceWithoutVat + priceVAT;
	console.log(priceWithVAT);
	output.innerHTML = priceWithVAT;
});
