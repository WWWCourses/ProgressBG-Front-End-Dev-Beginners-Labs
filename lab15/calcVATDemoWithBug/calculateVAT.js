let btn = document.querySelector('button');
let output = document.querySelector('.output');
let priceWithoutVATInput = document.querySelector('#priceWithoutVAT');
let bgVatInput = document.querySelector('#bgVat');

btn.addEventListener('click', function(e){
	let priceWithoutVat = priceWithoutVATInput.value;
	const VAT = bgVatInput.value;

	console.log(typeof(priceWithoutVAT));
	console.log(typeof VAT);

	let priceVAT =  priceWithoutVat * VAT ;
	let priceWithVAT = priceWithoutVat + priceVAT;
	console.log(priceWithVAT);
	output.innerHTML = priceWithVAT;
});
