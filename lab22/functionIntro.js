// let userName1 = "Ada";
// let userName2 = "Pesho";

// // greeting
// console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~`);
// console.log(`Hello World`);
// console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~`);

// // greeting
// console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~`);
// console.log(`Hello World`);
// console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~`);

// function declaration:
function greeting( ) {
    console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~`);
    console.log(`Hello World`);
    console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~`);
}

// greeting();
// greeting();
// greeting();
// greeting();


// function declaration:
function greeting1( ) {
    console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~`);
    console.log(`Hello World`);
    console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~`);
}

// function expression:
let greeting2 = function( ) {
    console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~`);
    console.log(`Hello Bulgaria`);
    console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~`);
}

// console.log( greeting1 );
// console.log( greeting2 );
// greeting1();
// greeting2();


// function with parameters:
// let userName = "Ada";
// function greeting(userFirstName ) {
//     console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~`);
//     console.log(`Hello ${userFirstName}`);
//     console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~`);
// };

// greeting("Ada"); // userName = "Ada"
// greeting("Pesho"); // userName = "Pesho"

// let i = 1;
// function sqrt(x) {
//     i = i+1;
//     console.log(i);

//     return x**2;

// }

// console.log( sqrt(2) );
// let res = sqrt(3);
// console.log( res + res);


function f(){
    console.log("start");
    return 2+4;
    console.log("end"); // никога няма да се изпълни!
}


console.log( f()+f() );



// start
// 6
// start


