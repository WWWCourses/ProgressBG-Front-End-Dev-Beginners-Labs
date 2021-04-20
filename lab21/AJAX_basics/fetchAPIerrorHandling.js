function fetchAPI(url) {
	fetch(url)
	.then( resp=> {
		if(!resp.ok){
			throw new Error(resp.status)
		}

		// log response headers
		resp.headers.forEach( (name, value)=>{
			console.log(`${name}: ${value}`);
		})
	} )
	.catch( err=>{
		console.error(`Ups, error: ${err}`)
	})
}


fetchAPI("/data/Data.txt");