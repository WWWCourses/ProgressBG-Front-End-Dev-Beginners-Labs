(function() {
	let div = "";

	const createDiv = function(message) {
		div = document.createElement('div');
		div.innerHTML = message;
		document.body.appendChild(div)
	};

	var i = 10;

	const elementH1 = function(message) {
		div = document.createElement('H1');
		div.innerHTML = message;
		document.body.appendChild(div)
	};

	elementH1('Initial Message');

})();