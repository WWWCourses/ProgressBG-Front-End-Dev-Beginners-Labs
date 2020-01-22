// In the global execution context (outside of any function), this refers to the global object
console.log(`this.global: ${this.global}`);
if( this.window ){
    // if the script is executed by a Browser, then there will be a global object 'window' defined:
    console.dir(this.window );
    console.log( this.window === window);
}else if( global ){
    // if the script is executed by node.js, then there will be a global object 'global' defined:
    console.log(`ggggggg`);
    console.dir(global);
}


// let person1 = {
//     'firstName': 'Pesho',
//     'greet': function(){
//         console.log(`Hello, I'm ${this.firstName}`)
//     }
// }
// let person2 = {
//     'firstName': 'Maria',
//     'greet': function(){
//         console.log(`Hello, I'm ${this}`)
//     }
// }

// console.log(`Hello, I'm ${person1.firstName}`)
// person1.greet();
// person2.greet();