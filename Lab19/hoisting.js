
console.log(x);
var x=1;

foo();

function foo() {
    console.log(x);
    var x = 1;
    console.log(`Foo`);
}

// RAM (global):
// x:1
// foo: function


