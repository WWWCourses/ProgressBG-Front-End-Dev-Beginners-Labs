function foo(x) {
    console.log(x);
}

foo(1);
foo('1');
foo(function () {
    console.log(`Anon`);
})