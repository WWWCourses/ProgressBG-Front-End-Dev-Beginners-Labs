function addEventListener(eventName, funcDef) {
	console.log(`I will call a function`);
	funcDef();
}

let n =0;
addEventListener("click", function () {
	console.log(`BTN was clicked ${n} times!!!`);
	n += 1;
})

