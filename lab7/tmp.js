let userName = 'pesho';
let userAge = 23;


// let user = {
// 	userName:userName,
// 	userAge:userAge,
// }

// let user = {userName,userAge};
// console.dir(user);

let user = {
	name: 'Pesho',

	greet(){
	  console.log(`Hi, I'm ${this.name}`);
	}
}

user.greet();
