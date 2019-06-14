var x = 5;

function outer(){  

  function inner(){
    var x = 111;
    console.log(`1. x = ${x}`);
  }
  inner();
  
  console.log(`2. x = ${x}`);
}

outer();
console.log(`3. x = ${x}`);

// 1. 111
// 2. error 
// 3. 5