let rectangle = {
	width : 2.14,
	height : 2 * rectangle.width, // error
	calcArea : function(){
		return rectangle.width * rectangle.height; // ok
	}
};

// the same, but here we keep the order of properties assignment
// let rectangle = {}
// rectangle.width = 2.14;
// rectangle.height = 2 * rectangle.width; // ok
// rectangle.calcArea = function(){
// 	return rectangle.width * rectangle.height; //
// }

console.log( rectangle.calcArea() );