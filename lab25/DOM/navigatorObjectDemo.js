

let div = document.createElement('div');

if( navigator.platform === 'Linux x86_64'){
	div.innerHTML = "Linux";
}else{
	div.innerHTML = "Windows";
}

document.body.appendChild(div)