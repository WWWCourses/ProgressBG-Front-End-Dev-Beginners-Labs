// generate machine number
var machineNumber = Math.ceil(Math.random()*10);
var userNumber = Math.round(Math.random() * 10);


console.log(`machineNumber = ${machineNumber}`);

while( !(userNumber === machineNumber)){  
  if( userNumber === machineNumber){
    console.log(`Bravo!`);
    break;
  }else{
    // user enters new number
    userNumber = Math.round(Math.random() * 10);
  }

  console.log(`userNumber = ${userNumber}`);
}



randomEvenNumber = machineNumber;
console.log(randomEvenNumber);
