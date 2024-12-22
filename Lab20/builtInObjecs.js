function sum() {
    console.log(arguments);
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
        sum+=element
    }
    return sum;
}

console.log( sum(2,3) );
console.log( sum(2,3,4) );//