const items = document.querySelectorAll('.menu li');
const btnGetTotal = document.querySelector('.btnGetTotal');

let totalPrice = 0;
let currentPrices = [];

// when a LI is clicked => toggle class 'selected'
for( item of items){
	item.addEventListener('click', function (e) {
		let item = e.target;
		item.classList.toggle('selected');

		let price = item.firstElementChild.innerText*1;

		currentPrices.push(price);
		// currentPrices.push(-price);
	});
}

// get total sum of all selected items
btnGetTotal.addEventListener('click', function (e) {

})

