let x = 5;
let y = x; // copy by value
y = 3;
console.log(`x = ${x}, y = ${y}`);// x = 5, y = 3


// RAM:
// 0X11111: x => 5
// 0X11112: y => 3


let obj1 = {
	"x":5,
}
let obj2 = obj1; // THIS IS NOT A COPY OF THE OBJECT VALUE
obj2.x = 3;

// RAM:
// 0x22222:obj1
// 		0x22223:obj1.x => 3
// 0x12444:obj2 => 0x22222


console.dir(obj1); // {x:3}
console.dir(obj2); // {x:3}
