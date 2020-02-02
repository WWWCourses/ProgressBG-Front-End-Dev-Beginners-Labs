let addEvent = function (eventName, f) {

    if( eventName === "click"){
        f();
    }
    console.log(`I will call your function`);

}

let arr = [
    function() {
        console.log(`Hello`);
    },
    function () {
        console.log(`World`);
    }
]

let myFunction = function() {
    console.log(`Hello`);
};


addEvent('dblclick', myFunction() );