// Get HTML elements needed:
let priceInput = document.querySelector('#price');
let vatInput = document.querySelector('#vat');
let calcBtn = document.querySelector('#calc');
let output = document.querySelector('.output');


calcBtn.addEventListener('click', function() {
    let priceWithoutVAT = priceInput.value*1;
    let VATpercentage = vatInput.value*1;

    console.log( typeof priceWithoutVAT);

    let priceWithVAT = priceWithoutVAT + (priceWithoutVAT * VATpercentage / 100);

    console.log(priceWithVAT);
    output.innerHTML = priceWithVAT;

})


