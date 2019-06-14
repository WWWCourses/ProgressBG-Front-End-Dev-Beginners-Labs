// not a pure function:
// function sum(x,y){  
//   console.log(`x+y=${x+y}`);
// }

// pure funcbtion:
function sum(x,y){
  console.log(`Beggin`);
  return x+y;
  console.log(`End`);
}

let greet = function(){
  console.log(`Hello, world!`);
}
greet();

// console.log( sum(2,3)**2 );
