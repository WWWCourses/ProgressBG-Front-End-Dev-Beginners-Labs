// console.log(document);
// console.dir(document);


// let html = document.children[0];
// let head=html.children[0];
// console.dir(head);

// let title=head.children[2];
// console.dir(title);

// console.log(title.innerHTML);
// title.innerHTML = '@@@@@@@@@@@@@@@';

/* ------------------- get attribute object - long variant ------------------ */
// let bodyLong = document.children[0].children[1];
// console.dir(bodyLong);

// let body = document.body;
// // console.dir(body);

// let h1Long = body.children[0];
// console.dir(h1Long);

// console.dir(test);
// test.innerHTML = '@@@@@@'
// console.log(test.childNodes[0].data);
// test.childNodes[0].data = '#####'

// Example
console.dir(divTest.childNodes);
for (let i = 0; i < divTest.childNodes.length; i++) {
	const node = divTest.childNodes[i];

	if(node.nodeType!==1){
		// TODO: why comment is not filtered
		console.log(node.nodeType, node.nodeName);
		divTest.removeChild(node);
	}

}
