// Машината си "намисля" число (1 .. 10):
// var machineNumber = Math.round(Math.random() * 10);
// console.log(`machineNumber: ${machineNumber}`);

let machineNumber = 4;

// Потребителя "въвежда" число:
do{
	// Потребителя "въвежда" ново число:
	userNumber = Math.round(Math.random() * 10);
	console.log(`new userNumber: ${userNumber}`);

	if( userNumber < machineNumber){
		console.log(`Think of BIGGER number`);
	}else {
		console.log(`Think of SMALL number`);
	}


}while(userNumber != machineNumber)

// TASK: log in console how many times the while loop