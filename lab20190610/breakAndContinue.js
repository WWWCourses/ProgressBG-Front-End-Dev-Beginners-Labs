var stopNumber = 5;


for(var i=0; i<10; i++){
  console.log(`i = ${i}`);

  if(i===stopNumber){
    break;
  }
}

console.log('~'.repeat(20));

for(var i=0; i<stopNumber; i++){
  console.log(`i = ${i}`);
}