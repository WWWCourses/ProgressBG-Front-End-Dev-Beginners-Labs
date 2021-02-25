class Rectangle{
	constructor(w,h) {
		this.width = w;
		this.height = h;
	}

	// methods definition
	calcArea(){
		return this.width * this.height;
	}
}

console.log( typeof Rectangle );

let r1 = new Rectangle(2,4);
let r2 = new Rectangle(5,6);

console.log( r1.calcArea() );
console.log( r2.calcArea() );



