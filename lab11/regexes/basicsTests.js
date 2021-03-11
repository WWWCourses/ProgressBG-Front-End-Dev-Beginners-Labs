//^ $ \ . * + ? ( ) [ ] { } |
const arr = [
	// +359CCXXXXXX, CC = 88, 87
	'+35988123456', //ok
	'+359881234560', //no
	'+35998123456', //no
]

// match names STARTING with consonant:
const re = /^\+3598[78]\d/;



arr.forEach( el => {
	// do the test:
	if ( re.test(el) ){
		console.log(`Yes`);
	}else{
		console.log(`No`);
	}
})






