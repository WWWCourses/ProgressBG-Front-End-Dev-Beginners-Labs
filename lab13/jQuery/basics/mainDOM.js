
let dom = {
	'btn': document.querySelector('button'),
	'output':document.querySelector('.output')
}

// console.dir(dom.btn);
dom.btn.addEventListener('click', function (event) {
	dom.output.innerHTML="";
})
