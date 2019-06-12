if(0){
    var studentName0 = 'Maria';
    var studentName1 = 'Pesho';
    var studentName2 = 'Asen';

    var studentScore0 = 4;
    var studentScore1 = 5;
    var studentScore2 = 6;

    var maxScore = Math.max(studentScore1,studentScore2,studentScore3);
}

if(0){

    console.log( studentsNames);

    // big bug !!!!
    if( studentsNames.length = 0 ){
        console.log('Empty')
    }

    console.log( studentsNames);


}

var studentsNames = [ 'Maria', 'Pesho','Asen'];
var studentsScores = [4,5,6 ];

// TODO: send HW: log the name of the student with max score
var max = 0;
for(var i=0; i<studentsScores.length; i++){
    if( studentsScores[i]>max ){
        max = studentsScores[i];
    }
}
console.log(max);





// console.log( studentsNames );
// add 'Ivan' to the beginnig of studentsNames
studentsNames.unshift('Ivan');

