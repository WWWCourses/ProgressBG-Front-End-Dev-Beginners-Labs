let x = 1;

let foo = function(){
    let x = 9;
    console.log(`x in foo: ${x}`);
}
foo();

console.log(`x in main: ${x}`);