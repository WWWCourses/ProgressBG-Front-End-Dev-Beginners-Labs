let userInput = document.querySelector('input[type="number"]');
let output = document.querySelector('.output');
let btnTest = document.querySelector('.test');


btnTest.addEventListener("click", function(){
	let x = userInput.vаlue*1;

	// output.innerHTML = (x % 2) ? "ODD" : "EVEN";

	// the same as above line, but longer !!!
	if( x% 2 ){
		output.innerHTML = "ODD";
	}else {
		output.innerHTML = "Even";
	}
});