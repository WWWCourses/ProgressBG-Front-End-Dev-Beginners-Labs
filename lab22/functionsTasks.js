// declare a function greetUser() through expression, which will take 2 parameters:
// userName and userBirthYear.
// and will greet the user as shown bellow:

let currentYear = 2020;
let greetUser = function(userName, userBirthYear){
    console.log(`Hello ${userName}. You are ${currentYear - userBirthYear} years old!`);
}

greetUser('Pesho', 1990);
// Hello Pesho. You are 30 years old!
greetUser('Maria', 2000);
// Hello Maria. You are 20 years old!



