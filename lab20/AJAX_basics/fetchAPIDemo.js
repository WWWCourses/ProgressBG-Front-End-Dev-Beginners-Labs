function fetchAPI(url) {
	fetch(url)
	.then( resp=> {
		console.dir(resp);
		// log response headers
		resp.headers.forEach( (name, value)=>{
			console.log(`${name}: ${value}`);
		})
	} )
	.catch( err=>{
		console.log(`Ups, something went wrong!!!!`)
	})


}


fetchAPI("/data/Data.txt");

console.log(`Hello`);