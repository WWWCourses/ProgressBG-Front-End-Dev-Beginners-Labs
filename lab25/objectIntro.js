// // never do that:
// let car1 = ["Ford", 2014, 240, function() {
//     console.log( `The car is driving`);
// } ];

// let moto1 = ["Hundai", 2000, 120, function() {
//     console.log( `The moto is driving`);
// }];


// car1[3]();
// moto1[3]();


// the same with objects:
let car1 = {
    "brand": "Ford",
    "year of production": 2014,
    "year": 2019,
    "speed" :240,
    "drive": function() {
        console.log( `The car is driving`);
    }
};




console.log( car1["brand"] );
console.log( car1.brand );


console.log( car1.year );
console.log( car1["year of production"]);




// let x = 5;
// let demoObj = {
//     "scores" : [1,2,3],
//     "foo": function(name) {
//         console.log(`name: ${name}`);
//     },
//     "address": {
//         "zipCodes": [1,2,3]
//     }
// };

// console.log( demoObj.scores[1] );
// console.log( demoObj.address.zipCodes[1]);


// console.log( demoObj );