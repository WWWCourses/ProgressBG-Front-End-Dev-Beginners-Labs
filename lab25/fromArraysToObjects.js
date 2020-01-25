let student1 = ["Ivan", "Ivanov", 5, 4, ];
let student21= ["Petyr", "Petrov", 3, 6];

let pupil1 = ["Gosho", 5, 4, 3];

// function which find and return the max score of a student:
let findMaxScore = function( arr ) {
    // let max = Math.max(5,4);
    // return max;

    return Math.max( arr[2], arr[3] );
}

// call function for student1:
let student1Max = findMaxScore( student1 ); //
console.log( student1Max ); //5


// call function for student21:
let student21Max = findMaxScore( student21 ); //
console.log( student21Max ); // 6

