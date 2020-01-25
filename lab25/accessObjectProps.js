let obj = {
    a: 1,
    b: 2,
    c: 3
};

let propNames = [
    "a",
    "b"
];

let propName = "c";
obj[propName]

// console.log( obj[propNames[0]] );
// console.log( obj[propNames[1]] );


for (let i = 0; i < propNames.length; i++) {
    const element = propNames[i];
    console.log( obj[element] );
}

// 1,