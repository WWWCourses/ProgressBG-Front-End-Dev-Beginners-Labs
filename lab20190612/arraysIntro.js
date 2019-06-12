if(0){
    var studentName0 = 'Maria';
    var studentName1 = 'Pesho';
    var studentName2 = 'Asen';

    var studentScore0 = 4;
    var studentScore1 = 5;
    var studentScore2 = 6;

    var maxScore = Math.max(studentScore1,studentScore2,studentScore3);
}


var studentsNames = [ 'Maria', 'Pesho','Asen' ];
var studentsScores = [4,5,6 ];


var maxScore = Math.max(
    studentsScores[0],
    studentsScores[1],
    studentsScores[2],
);

console.log( studentsNames );
// add 'Ivan' to the of studentsNames
// TODO: ?
studentsNames[-1] = 'Ivan';
console.log( studentsNames );

