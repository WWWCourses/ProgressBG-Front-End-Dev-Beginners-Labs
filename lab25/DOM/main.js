// console.log( global ); // on node
// console.log( window );


// var window = {
// 	'document': {

// 	},
// 	'Math': {
// 		'PI': 3.14
// 	},
// 	'url': 'http://127.0.0.1:5500/lab25/DOM/index.html'
// }

// let url = window.url;
// let Math = window.Math;

// console.log(Math);

// if( navigator.platform =='Linux x86_64'){
// 	let div = document.createElement('div');
// 	div.innerHTML = 'Linux';
// 	document.body.appendChild(div);
// }


let h1 = document.body.children[0]
console.log(h1.innerHTML);
h1.innerHTML="Buy!!!!"