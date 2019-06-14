// let foo = function bar(){
//   console.log(`I'm foo`);
//   bar();
// }

// foo();

// // IIFE
// (function(user){
//   console.log(`I'm ${user}`);
// })('Pesho');



// TODO: expalain...
// var bar = foo;
// foo = 5;
// bar();
// // foo();


// first-class functions
function foo(){
  console.log(`I'm foo`);
  return 1;
};

// function which returns a function
// function bar(){
//   return foo;
// }

// console.log( bar()() );
// console.log( foo() );

function foo(bar){
  bar();
}

function anon(){
  console.log(`I'm anonymous!`);
} 

foo( anon() ); //foo( undefined )