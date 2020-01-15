let student1 = {
    "fName":"Maria",
    "surName": "Popova",
    "Math": 5,
    "Art": 6,
}

// student1.birthAddress = {
//     "country" : "Bulgaria",
//     "town"    : "Sofia",
//     "zip"     : 1504,
// }

// console.log(student1.birthAddress);
student1.birthAddress = {};

student1.birthAddress.country = "Bulgaria";
let newProp = "town";
let newValue = "Sofia";

// use the square bracket notation:
student1.birthAddress[newProp] = newValue;

console.dir(student1);


// log in console Maria's town

