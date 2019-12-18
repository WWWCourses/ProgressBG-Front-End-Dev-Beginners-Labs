// for (init; condition; increment) {
//     block
// }
for( let c=1;c<=3;c++ ){
    console.log(c);
}

//
// let sum = 0, c = 1;
// for ( ;c <= 5;) {
//     // console.log(c);
//     sum += c++;
// }
// console.log(`sum = ${sum}`);


// for( let c = 10; c>=1; c--){
//     console.log(c);    
// }

// while loop demo:
// let number = Math.round(Math.random() * 100 );
// console.log(`number = ${number}`);

// while( number%2 ){    
//     console.log(`enter an Even number`);
//     number = Math.round(Math.random() * 100);
//     console.log(`number = ${number}`);
// }

let number;
// do{
//     console.log(`enter an Even number`);
//     number = Math.round(Math.random() * 100);
//     console.log(`number = ${number}`);
// } while (number % 2)

// break demo
for(;;){
    console.log(`enter an Even number`);
    number = Math.round(Math.random() * 100);
    console.log(`number = ${number}`);
    if (!(number % 2)){
        break;
    }
}


