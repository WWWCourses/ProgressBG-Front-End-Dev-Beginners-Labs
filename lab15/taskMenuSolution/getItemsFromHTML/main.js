function getItemsData() {
	// just a demo how to get data-* values into array of objects;
	// in practice it will be vice versa: we get the data from server as
	// array of objects and will set the data-* atributes, if needed

	let itemsData = [];

	const items = dom.menu.querySelectorAll('li');

	// items.forEach( item =>
	// 	itemsData.push( item.dataset )
	// )

	// same as above: perfect for this case
	itemsData = [...items].map( item=> item.dataset );

	return itemsData;
}
function updateItemsData(items, currentItemId) {
	// Variant with arr.map(): not good for this case
	// Cons: can not break, not readable for all
	// items = items.map( item=>
	// 	item.id === currentItemId ?
	// 		{...item,'selected':item.selected=="true"?"false":"true"} :
	// 		item
	// )

	// Variant with for loop: better for this case
	// Pros: can break and skip useless iterations
	// for (let i = 0; i < items.length; i++) {
	// 	const item = items[i];
	// 	if(item.id === currentItemId){
	// 		item.selected = item.selected=="true"?"false":"true";
	// 		// no need to continue the loop
	// 		break;
	// 	}
	// }

	// Variant with for..of: perfect for this case
	// Pros: shorter, readable, can break
	// Cons: can be mixed up with for..in
	for(let item of items){
		if(item.id === currentItemId){
			item.selected = item.selected=="true"?"false":"true";
			// no need to continue the loop
			break;
		}
	}
}


function calcTotal(items) {
	let total = 0;

	for(let item of items){
		total += item.selected=="true" ? item.price*1 : 0;
	}

	return total;
}

let totalPrice = 0;

let itemsData = [];

const dom = {
	'menu':document.querySelector('.menu'),
	'mainCourses':document.querySelector('.mainCourses'),
	'deserts':document.querySelector('.deserts'),
	'btnGetTotal':document.querySelector('.btnGetTotal'),
	'btnReset':document.querySelector('.btnReset'),
	'output':document.querySelector('.output span'),
}

/* -------------------------------------------------------------------------- */
/*                                Atachh Events                               */
/* -------------------------------------------------------------------------- */
dom.menu.addEventListener('click', function (e) {
	// we want to process click events only for LI elements
	// (and their SPAN children) in menu
	if(e.target.tagName !== "LI" && e.target.tagName !== "SPAN"){ return }

	// get li node
	const li = e.target.tagName==="LI" ? e.target : e.target.parentElement;

	// state:
	updateItemsData(itemsData, li.dataset.id);

	// UI
	li.classList.toggle('selected');
})

dom.btnGetTotal.addEventListener('click', function() {
	dom.output.innerText = calcTotal(itemsData);
})

dom.btnReset.addEventListener('click', function(e) {
	for(let item of itemsData){
		item.selected = "false";
	}

	liNodes = dom.menu.querySelectorAll('li');
	liNodes.forEach(li => {
		li.classList.remove('selected');
	});

	dom.output.innerText = 0;
})

window.onload = function (){
	itemsData = getItemsData()
}

