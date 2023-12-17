console.dir(window);
// console.dir(global);


console.log( Math.PI );

// BOM
let userOS = navigator.platform;

if(userOS==='Linux x86_64'){
	let div = document.createElement('div');
	div.innerHTML = 'Linux';
	document.body.appendChild(div)
}