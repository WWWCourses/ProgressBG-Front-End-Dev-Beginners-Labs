let dom={
	output:  document.querySelector('.output'),
	getDataBtn: document.querySelector('.getDataBtn'),
};

function render(data) {
	dom.output.innerHTML = data;
}

const dataURL = '/data/data.txt';

// REQUEST to resource
// METHOD, URL

let fetchAPI = function(method, url) {
	fetch(url)
	.then(resp=>resp.text())
	.then(data=>render(data))

	.catch( err=>console.log(`ERROR`))
}

let fetchDataByXHR = function(method, url){
	// create a XMLHttpRequest object
	let xhr = window.XMLHttpRequest ? new XMLHttpRequest() :
			  new ActiveXObject("Microsoft.XMLHTTP");

	// initializes the request:
	xhr.open(method, url);

	// EventHandler, that will be fired each time when the xhr state changes
	xhr.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			// the server has give us the data
			// finally do something with content:
			// 20 sec to get the data
			render(this.responseText);
		};
	};

	// sends the request:
	xhr.send();
};

dom.getDataBtn.addEventListener('click', function(){
	fetchDataByXHR("GET", dataURL);
	// fetchAPI("GET", dataURL);

});