console.log( 2==2 );   // true
console.log( 2=="2" ); // true

// we can not compare apples with oranges
console.log( 2==="2" ); // false

console.log( 2 != 3 ); // true
console.log( 2 != "3" ); // true
console.log( 2 !== "3" ); // true

console.clear();
console.log( 2>3 ); // false
console.log( 2>2 ); // false
console.log( 2>=2 ); // true
console.log( 2 >= "2" ); // true

// do not do that:
// console.log( 2 => "2" ); // error
// var x = 1, y = 2;
// console.log( x => y);

console.clear();
console.log( true === 1); // false
console.log( true == 1); // true
console.log( true == 3); // false

// lexicographical ordering
console.clear();
console.log( "2" > "19"); // true
console.log( "21111111" > "19"); // true
console.log( "%" > "@"); // 37 > 64 => false
console.log( "a" > "A"); // true





