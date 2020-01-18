// let foo = function() {
//     console.log(`I'm foo!`);
// }
// foo();

// let arr = [
//     function(){
//         console.log(`I'm foo!`);
//     },
//     [1,2,3],
//     5,
// ]


// let foo = arr[0];
// foo();

// arr[0]();


// var a = function b(){
//     console.log("I am in b!");
// }



// b();
// a();

(function(){
    let global = "test";
    console.log(`global: ${global}`);
})()





global.setTimeout(() => {
    console.log(`Hello!`);

}, 2000);
