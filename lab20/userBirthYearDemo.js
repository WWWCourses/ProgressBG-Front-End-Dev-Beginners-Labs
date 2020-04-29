let output = document.querySelector('.output');
let userBirthYearInput = document.querySelector('[type="number"]');
let btnOK=  document.querySelector('.btnOK')


function clickHandler() {

	let userBirthYear = userBirthYearInput.value*1;
	// console.log(`userBirthYear: ${userBirthYear}`);


	if( 2020 - userBirthYear >= 18 ){
		console.log(`Welcome to my site`);
		output.innerHTML = 'Welcome to my site';
	}
}

btnOK.addEventListener('click', clickHandler);


