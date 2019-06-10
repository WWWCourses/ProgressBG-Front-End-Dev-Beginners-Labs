// generate machine number
var intervalTop = 100; 
var machineNumber = Math.ceil(Math.random()*intervalTop);
var randomEvenNumber;

while( machineNumber%2 ){
  machineNumber = Math.ceil(Math.random()*intervalTop);
  // console.log(`machineNumber = ${machineNumber}`);
}


randomEvenNumber = machineNumber;
console.log(randomEvenNumber);
