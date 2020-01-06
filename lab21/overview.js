// coerce demo
console.log( "3" - 2 ); // 1

//
let userBirthYear = "1990";
let currentYear = 2020;

let userAge = currentYear - userBirthYear;

console.log( `userAge: ${userAge}` ); // 30

// no-coerce, but problem:
let x = "2" * 1;
let y = "3" * 1;


console.log(`x + y = ${x+y}`); // 23


// conditional:
let userName;

if( userName ){
    console.log(`Hi, ${userName}`);
}else{
    console.log(`Please, enter your name`);
}

// loops:
for( let i = 1; i<=10; i = (i+1)**2 ){
    console.log( i );
}

// 4
// 25


// console.log(`i = ${i}`);

// while demo
// log the numbers 1 to 10:
console.clear();
let i = 1;
while( i<=3 ){
    console.log(i);
    continue;
    i+=1;
}
console.log(`i = ${i}`);






