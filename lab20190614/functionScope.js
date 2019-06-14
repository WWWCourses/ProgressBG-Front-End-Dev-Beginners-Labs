function foo(){
  // x is local variable to the foo
  x = 5;
  console.log(`1. x = ${x}`);  
}

foo();
console.log(`2. x = ${x}`);
var y = 9;
console.log(`3. y = ${y}`);