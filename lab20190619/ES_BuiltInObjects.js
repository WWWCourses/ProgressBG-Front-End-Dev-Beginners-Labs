
function MathObject() {
    console.log('====================================');
    console.log(Math.PI);
    console.log('====================================');


    let base = 10;
    let power = 2;
    console.log(base**power);

    console.log(Math.pow(base,power));
}


function StringObjDemo(params) {
    let userName = 'ivan ivanov';
    // ivan => asen : asen asenov
    // let newUserName = userName.replace('ivan','asen');

    let newUserName = userName.toUpperCase();
    console.log('====================================');
    console.log(`newUserName : ${newUserName}`);
    console.log('====================================');
}

function ArrayObjectDemo(){
    let myArr = [1,2,3,2,5,1,4];
    myArr.sort();

    console.log('====================================');
    console.log(`Sorted arr: ${myArr}`);
    console.log('====================================');
}

function DateDemo() {
    let now = new Date();
    let nowObj = Date.now();

    // log only current hour
    console.log('====================================');
    console.log(`now: ${now}`);
    console.log(`nowObj: ${nowObj}`);
    console.log('====================================');
}
DateDemo();
