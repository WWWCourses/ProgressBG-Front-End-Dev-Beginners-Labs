const dom = {
	appetizerLink: document.querySelector('a.appetizer'),
	appetizerWrapper: document.querySelector('div.appetizer'),
	saladsLink: document.querySelector('a.salads'),
	saladsWrapper: document.querySelector('div.salads'),
}



dom.appetizerLink.addEventListener('click', function (e) {
	dom.appetizerWrapper.classList.remove(('hidden'))
	dom.saladsWrapper.classList.add(('hidden'))
})

dom.saladsLink.addEventListener('click', function (e) {
	dom.appetizerWrapper.classList.add(('hidden'))
	dom.saladsWrapper.classList.remove(('hidden'))
})