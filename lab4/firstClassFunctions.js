// // pure function:
// function add(x,y) {
// 	return x+y;
// }

// function sub(x,y) {
// 	return x-y;
// }

// function calc(f,x,y) {
// 	f(x,y);
// }

// let x = 2, y = 3;
// let res = add(x,y) * sub(x,y);
// console.log(`res: ${res}`); //


// let userName = "Ada";

// function greet(userName){
// 	return function() {
// 		console.log(userName);
// 	};
// }

// setTimeout( greet("Ada") , 2000 );
// // TODO: give as task on arrow syntax
// setTimeout( userName => {
// 	return function() {
// 		console.log(userName);
// 	}
// }("Pesho"), 4000 );

// line 27: 09:00:00


setTimeout( ()=> {return console.log(`Ada`)}, 2000);


// function setTimeout(f, delay) {
// 	wait(delay);
// 	f(); 09:00:02
// }

// "Ada" after 2000