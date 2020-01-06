var red = "#F00";
var green = "#0F0";
var blue = "#00F";

console.log(red);
console.log(green);
console.log(blue);

// let colors = ["#F00", "#0F0", "#00F"];

// console.log(`green = ${colors[1]}`);

console.clear();
var fruits = [
    "apple",
    "banana",
    "strawberry",
    "banana",
    "orange"
];
console.log(fruits[2]);


fruits[2] = 5;
console.log( fruits);


// length of array:
console.log( fruits.length);

// index of the last arrays element:
console.log( fruits.length -1 );


// get the last array element:
console.log( fruits[fruits.length-1]);

// add element to the end of the array:
fruits[fruits.length] = "strawberry";

// console.log( fruits );



// check if array is empty:
// console.clear();
// let arr = [1,2,3];
// if( arr.length = 0){
//     console.log(`Empty`);
// }

// console.log(arr);

// loop over arrays
console.clear();
let arr = [2,4,6];
for (let i = arr.length-1; i>=0 ; i--) {
    console.log(arr[i]);
}

// array of arrays:
var matrix = [
    [ 'а', 'б', 'в' ],
    [ 'г', 'д', 'е' ],
    [ 'ж', 'з', 'и' ],
];

console.log( matrix[0] );
// let m1 = matrix[0];
// console.log( m1[1]);
// console.log( matrix[0][1]);

console.log( matrix[0][2]); // в
console.log( matrix[1][1]); // д
console.log( matrix[2][0]); // ж
console.log( matrix[2][2]); // и







