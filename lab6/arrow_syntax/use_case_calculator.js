
// Task: define calcultor object using arrow syntax:
const calculator = {
	"add": function(x,y) { return x+y },
	"sub": (x,y)=>x-y,
	"mult": (x,y)=>x*y,
	"div": (x,y)=>x/y,
}

// Test:
console.log( calculator.add(2,3) );	// 5
console.log( calculator.sub(2,3) );	// -1
console.log( calculator.mult(2,3) );// 6
console.log( calculator.div(2,3) );	// 0.6666666666666666