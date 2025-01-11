function add(x:number,y:number):number {
    return x+y
}

// optional parameters:
function greet(firstName: string, lastName?: string) {
    return lastName? `${firstName} ${lastName}`: firstName;
}

console.log( greet('Ada', 'Byron') );
console.log( greet('Ada') );

add(4, 5) + 1;