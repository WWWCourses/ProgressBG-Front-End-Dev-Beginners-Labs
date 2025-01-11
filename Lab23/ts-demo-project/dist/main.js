"use strict";
function add(x, y) {
    return x + y;
}
// optional parameters:
function greet(firstName, lastName) {
    return lastName ? "".concat(firstName, " ").concat(lastName) : firstName;
}
console.log(greet('Ada', 'Byron'));
console.log(greet('Ada'));
add(4, 5) + 1;
