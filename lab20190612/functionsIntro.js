// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// function declaration:
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function beautyLog(msg){
    // var msg = 'Hello';
    console.log('====================================');
    console.log(msg);
    console.log('====================================');
}
// beautyLog('hello');


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// function defintition:
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var beautyLog2 = function(msg){
    // var msg = 'Hello 2';
    console.log('====================================');
    console.log(msg);
    console.log('====================================');
}
// beautyLog2('hello 2');


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Function name is just a variable, holding a 'function' value:
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function demo1() {

    var f = beautyLog;
    beautyLog('Hello');
    f('Ada');

}
// demo1();


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Demo: calcOddOrEven function without parameters:
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function demo2() {

    var x = 8;
    function calcOddOrEven() {
        if(x%2){
            beautyLog(`${x} is odd`);
        }else{
            beautyLog(`${x} is even`)
        }
    }
    calcOddOrEven();

}
// demo2();


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Demo: sum function with parameters:
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function demo3(){

    function sum(x, y){
        // var x = 9
        // var x = 6
        console.log( x + y );
    }

    sum(9, 6);
    sum(20,30);

}
// demo3();


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// TASK: to be done with function for any array:
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function demo4(){
    var studentsScores = [8,4,5,6 ];

    var max = 0;
    for(var i=0; i<studentsScores.length; i++){
        if( studentsScores[i]>max ){
            max = studentsScores[i];
        }
    }
    console.log(max);

}
// demo4();

