// function, which returns a function
// let foo = function() {
// 	return function(){
// 		console.log(`I'm bar`);
// 	}
// };

// let res = foo();
// res();

// function passed to other function
let foo = function( f ) {
	console.log(`I'm foo!`);
	f(); //
}

foo( function () {
	console.log(`I'm bar`);
} );






foo(function () {
	console.log(`I'm bar`);
})


// i'm foo;








// let bar = function(){
// 	console.log(`I'm bar`);
// }




