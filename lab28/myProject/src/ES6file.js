class A{
	constructor(id){
		this.id = id
	}

	getId(){
		console.log(this.id);
	}
}

let obj1 = new A(1)
let obj2 = new A(2)

obj1.getId()
obj2.getId()