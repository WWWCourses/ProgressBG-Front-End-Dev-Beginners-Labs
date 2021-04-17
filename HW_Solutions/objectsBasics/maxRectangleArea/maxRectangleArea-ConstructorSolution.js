/*TASK:
	Represent the data, about 5 rectangles with next properties:

		id: r1, width: 40, height: 20
		id: r2, width: 30, height: 30
		id: r3, width: 10, height: 80
		id: r4, width: 90, height: 2
		id: r5, width: 20, height: 20

	Write a function which will return the id of the rectangle with biggest area.

	Expected output: r2
*/

function Rectangle(width,height) {
	// make rectangle id
	Rectangle.count+=1;
	this.id = `r${Rectangle.count}`
	this.width = width || console.log(`Please, give me a Rectangle width`);
	this.height = height || console.log(`Please, give me a Rectangle height`);
}
Rectangle.count = 0;
Rectangle.prototype.calcArea = function (){
	return this.width * this.height;
}
// if you want to use getter instead => read:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get#defining_a_getter_on_new_objects_in_object_initializers


function findRectangleWithMaxArea(rectangles){
	let currentMaxArea = 0;
	let currentMaxRectangleID = "";

	for (let i = 0; i < rectangles.length; i++) {
		const r = rectangles[i];
		const rArea = r.calcArea();

		if( rArea > currentMaxArea ){
			currentMaxArea = rArea;
			currentMaxRectangleID = r.id
		}
	}

	return currentMaxRectangleID;
}

let rectangles = [
	new Rectangle(40,20),
	new Rectangle(30,30),
	new Rectangle(10,80),
	new Rectangle(90,2),
	new Rectangle(20,20),
];

let maxRectangleId = findRectangleWithMaxArea(rectangles);
console.log(`maxRectangleId: ${maxRectangleId}`);

