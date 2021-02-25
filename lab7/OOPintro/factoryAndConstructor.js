// r1 = {
// 	width : 2.14,
// 	height : 4
// 	calcArea : function(){
// 		return rectangle.width * rectangle.height; // ok
// 	}
// };

function rectangleFactory(w,h) {
	let obj = {};

	obj.width = w;
	obj.height = h;
	obj.calcArea = function(){
		return this.width * this.height;
	};

	return obj;
};

let r1 = rectangleFactory(2.14, 4);
console.dir(r1);


function Rectangle(w,h) {
	// this = {}
	this.width = w;
	this.height = h;
	this.calcArea = function(){
		return this.width * this.height;
	};

	// return this
}

let r2 = new Rectangle(5,6);
let foo = r2.calcArea;

console.log( r2.calcArea() );
// console.log( foo() );


