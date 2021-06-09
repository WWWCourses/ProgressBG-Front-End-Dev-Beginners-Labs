function caller(f,userName) {
	f(userName);
}

function callback(userName) {
	console.log(`Hi, ${userName}`);
}

// callback("Pesho");

caller(callback,"Pesho")