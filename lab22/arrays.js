// let arr = ["a","b","c","d"];

// // console.log(arr[0]);
// // console.log(arr[1]);
// // console.log(arr[2]);

// // for loop over i:
// for (let i = arr.length-1; i>=0 ;i--) {
//     const element = arr[i];
//     console.log(element);
// }


// array of arrays:
// var matrix = [
//     [ 'а', 'б', 'в' ],
//     [ 'г', 'д', 'е' ],
//     [ 'ж', 'з', 'и' ]
// ];
// console.log( matrix[0][2]);
// console.log( matrix[1][1]);
// console.log( matrix[2][0]);

// for (let i = 0; i < matrix.length; i++) {
//     const row = matrix[i];
//     console.log(row);
// }

// print negative elemnts:
// let arr = [-4, 0, -2, 1];
// for (let i = 0; i < arr.length; i++) {
//     const el = arr[i];
//     if( el<0){
//         console.log(el);
//     }
// }


// separate array elements:
let arr = [-4, 0, -2, 1, 3];

let negative = [];
let positive = [];
// negative.push(3);

for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    if( el < 0){
        negative.push( el );
    }else if(el > 0){
        positive.push(el)
    }

}

console.log(`negative: ${negative}`);
console.log(`positive: ${positive}`);




