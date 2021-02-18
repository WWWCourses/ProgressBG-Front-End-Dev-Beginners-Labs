/* ----------------------------- spread operator ---------------------------- */
// let arr = [1,2];
// let x = [arr];
// console.log(x);
// console.log( x[0] ); // [1,2]

// let y = [...arr];
// console.log(y);

// let z = [9, ...arr];
// console.log( z );


// let oldUsers = ["pesho"];
// // let newUsers = oldUsers.unshift("maria"); // not ok
// let newUsers = ["maria", ...oldUsers, "ivan"];//

// console.log( oldUsers );// ["pesho"]
// console.log( newUsers );// ["maria","pesho", "ivan"]

// function sum(x,y) {
// 	console.log( x,y ) ;
// }

// let args = [2,3];
// // sum(args[0],args[1]);
// sum(...args);


/* ----------------------------- rest paraemters ---------------------------- */
// const sum = (x, ...args) => {
// 	console.log(`x: ${x}`);
// 	console.log(args);
// }

// sum(1, 2, 3);