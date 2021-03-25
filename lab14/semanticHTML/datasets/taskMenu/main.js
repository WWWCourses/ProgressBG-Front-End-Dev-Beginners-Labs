// TODO: set as HW
const items = document.querySelectorAll('.menu li');
const btnGetTotal = document.querySelector('.btnGetTotal');

let totalPrice = 0;
let currentPrices = [];

// when a LI is clicked => toggle class 'choosen'
for( item of items){
	item.addEventListener('click', function (e) {
		let item = e.target;
		item.classList.toggle('choosen');

		let price = item.firstElementChild.innerText*1;

		currentPrices.push(price);
		// currentPrices.push(-price);
	});
}

btnGetTotal.addEventListener('click', function (e) {
	// get total sum of all choosen items

})

