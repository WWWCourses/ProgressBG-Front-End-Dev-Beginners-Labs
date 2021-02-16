function fact(n) {
    // fact(n) = fact(n-1)*n, if n>1
    // fact(n) = 1,           if n = 1

    if (n === 1) {
        return 1;
    } else {
        // return fact(n-1)*n;
        return fact(n - 1) * n;
    }
}


let res = fact(3); // 3*2*1 = 6
console.log(res);


// STACK1: fact(3)
// 0x1234: n:3
// 0x1235: fact(3) = fact(2)*3

// STACK2: fact(2):
// 0x1239: n:2
// 0x1210: fact(2) = fact(1)*2

// STACK3: fact(1):
// 0x1239: n:1
// 0x1210: fact(1) =  1