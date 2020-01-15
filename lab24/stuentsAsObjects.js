let student1 = {
    "fName":"Maria",
    "surName": "Popova",
    "scores": {
        "Math": 5,
        "Art": 6,
    },
    "birthAddress": {
        "country" : "Bulgaria",
        "town"    : "Sofia",
        "zip"     : 1504,
    }
}

console.log( student1);


let student2 = {};
// console.log(student1);

// define function studentBestScore(), which will print the subject name of student's hightest score:

let subjects = ["Math", "Art"];

let studentBestScore = function(student) {
    // log the student math score:
    // console.log(student.scores.Math);
    // console.log(student.scores.Art);

    console.log( subjects[0] );

    console.log(student.scores.Math);
    console.log(student.scores["Math"]);
    // TODO: Send as HW and separate demos in codepen
    console.log(student.scores[subjects[0]]);
    console.log(student.scores[subjects[1]]);


    // log the student scores:


}

studentBestScore(student1); // log student 1
// studentBestScore(student2); // log student 2

