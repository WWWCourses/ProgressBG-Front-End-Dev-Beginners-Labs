let x = 8;

if( x%2 == 0 || x%3==0 ){
    console.log(`OK`);
};

console.log( 3&&4 ); // 4
console.log( 0&&4 ); // 0
console.log( 0||4 ); // 4

// Short-circuit evaluation
// let y =23;
// if(y === undefined){
//     y = 100;
// }
y = y || 100;
console.log(`y = ${y}`);


