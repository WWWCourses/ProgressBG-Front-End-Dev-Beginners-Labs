// let obj = {
// 	id:1,
// 	setId: function(value) {
// 		this.id = value
// 	}
// }

// obj.setId(3)
// console.log(obj);


function onBtnClick() {
	console.log(`BTN was clicked`);
}






let btn = {
	addEventListener:function(eventName, f){
		let event = {
			'id': 1
		}

		if(eventName==='click'){
			f(event)
		}
	}
}

let foo = function(event) {
	console.log(`Foo`);
	console.log(event);
}


btn.addEventListener( 'click', foo)

// btn.addEventListener( 'click', foo() ) // WRONG!!!



// Foo