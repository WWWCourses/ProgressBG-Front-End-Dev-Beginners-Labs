function fetchAPI(url) {
	fetch(url)
	.then( resp=> {
		// console.dir(resp);

		// log response headers
		// resp.headers.forEach( (name, value)=>{
		// 	console.log(`${name}: ${value}`);
		// })

		// get body data
		// let body = resp.text();
		// console.log( body);
		// body.then( data=>console.log(data))
		return resp.text()
	} )
	.then(data=>console.log(data))



}


fetchAPI("/data/data.txt");

console.log(`Hello`);