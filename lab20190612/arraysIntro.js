 // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 // Using separate variables to represent data - not good (what if we had 300 students?)!
 // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 var studentName0 = 'Maria';
 var studentName1 = 'Pesho';
 var studentName2 = 'Asen';

 var studentScore0 = 4;
 var studentScore1 = 5;
 var studentScore2 = 6;

 var maxScore = Math.max(studentScore0,studentScore1,studentScore2);


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// using arrays to represent data - a better way
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var studentsNames = [ 'Maria', 'Pesho','Asen'];
var studentsScores = [4,5,6 ];

// TODO: send HW: log the name of the student with max score
var max = 0;
for(var i=0; i<studentsScores.length; i++){
    if( studentsScores[i]>max ){
        max = studentsScores[i];
    }
}
// console.log(max);


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Array properties and methods demo:
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// console.log( studentsNames );
// add 'Ivan' to the beginnig of studentsNames
studentsNames.unshift('Ivan');
// console.log( studentsNames );


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// bug demo - the array data will be deleted!!!!
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
console.log( studentsNames);

// big bug !!!!
if( studentsNames.length = 0 ){
    console.log('Array is empty')
}

console.log( studentsNames);

