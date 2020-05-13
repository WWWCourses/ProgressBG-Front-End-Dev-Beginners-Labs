// point1:
//    x1 => 2
//    y1 => 4

// point2:
//    x2 => 3
//    y2 => 4

let point1 = {
	'x': 2,
	'y': 4
}

let point2 = {
    "x": 3,
    "y": 4
}

console.log(`x = ${point1.x}, y = ${point1.y}`);

// let distance =  (x2 - x1) + (y2 - y1); // 1 + 0 = 1
let distance =( point2.x - point1.x) +  (point2.y - point1.y)
console.log(`distance = ${distance}`);

