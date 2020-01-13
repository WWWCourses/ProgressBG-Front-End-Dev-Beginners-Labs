function caller(callback){
    console.log("1")
    callback();
}

function a(){
    console.log("a")
}

function b(){
    console.log("b")
}


// caller(a); // 1, a
// caller(b); //

let c = caller;
c();


// 1
// a
// 1
// b
