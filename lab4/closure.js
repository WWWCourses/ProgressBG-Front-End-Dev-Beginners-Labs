function outer(x){
	let y = 9;

	function inner(){
		console.log(y+x);
	}

	return inner;
}


const f = outer(3);
f();



// GLOBAL:
// 011111: outer => function
// 011113: f => function(){
	// 	console.log(5);
	// }

// OUTER:
// 98888: x => 5
// 98889: inner => function(){
// 	console.log(x);
// }