let bar = function() {
    return 4;
}
let foo = function() {
    return bar();
}


let res = foo()();
console.log(`res = ${res}`);
// ?