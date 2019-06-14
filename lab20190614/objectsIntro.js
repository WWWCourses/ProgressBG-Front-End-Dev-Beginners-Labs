var userArr = [
  'Pesho',
  23,
  function(){
    console.log( 'Hi');
  },
  [
    'Bulgaria', 
    'ul.San Stefano 22'
  ]
];


var pesho = {
  'name' : 'Pesho',
  'age' : 23,

  'isAdult':function(){
    if(userObj.age > 18){
      return true;
    }else{
      return false;
    }
  },
  'address': {
    'country': 'Bulgaria', 
    'street':'ul.San Stefano 22'  
  }
};

if( pesho.isAdult() ){
  console.log(`Welcome`);
}

console.log( userArr[3][1]); //
console.log( userObj.address.street); //

