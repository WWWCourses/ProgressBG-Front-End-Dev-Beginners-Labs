let x = 10;

// // not effective way:
// if ( x % 2 === 0 ) {
// 	console.log(`Even (chetno)`);
// }
// // ako chisloto e nechetno:
// if( x % 2 !== 0 ){
//     console.log(`Odd (nechetno)`);
// }


// if-else: more effective way:
// if ( x % 2 === 0 ) {
// 	console.log(`Even (chetno)`);
// }else{
// 	console.log(`Odd (nechetno)`);
// }


let age = 13;
let status = "";

if( age > 18 ){
	status = "adult";
}else if( age < 18 && age > 12){
	status = "teen";
}else{
	status = "child"
}

console.log( status );






