if(0){
    var studentsScores = [8,4,5,6 ];

    var max = 0;
    for(var i=0; i<studentsScores.length; i++){
        if( studentsScores[i]>max ){
            max = studentsScores[i];
        }
    }
    console.log(max);


}


// var x = 4;
// y = x;


// function declaration:
function beautyLog(msg){
    // var msg = 'Hello';
    console.log('====================================');
    console.log(msg);
    console.log('====================================');
}
beautyLog('hello');

// function defintition:
var beautyLog2 = function(msg){
    // var msg = 'Hello';
    console.log('====================================');
    console.log(msg);
    console.log('====================================');
}
beautyLog2('hello 2');

// var f = beautyLog;
// // function call:
// beautyLog('Hello');
// f('Ada');

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


function demo3(){

    function sum(x, y){
        // var x = 9
        // var x = 6
        console.log( x + y );
    }

    sum(9, 6);
    sum(20,30);

}
