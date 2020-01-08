let arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

// sum of elements in main diagonal ( 1, 5, 9)
// arr[0][0] + arr[1][1] + arr[2][2]
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    console.log( arr[i][i] );
    sum += arr[i][i];
}
console.log(`sum = ${sum}`);

// HW: sum of elements in sub diagonal ( 3, 5, 7)
