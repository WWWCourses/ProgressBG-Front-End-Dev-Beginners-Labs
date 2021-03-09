let obj = {};
function foo() {

}

// every object has '__proto__'
console.dir(obj);

// every function has 'prototype'
foo.prototype.id = 1;
console.dir(foo);

