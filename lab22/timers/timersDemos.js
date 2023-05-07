function count(x) {
	return function () {
		console.log(x);
	}
}

// 12:00:00:0000
console.log(`1`);


// 12:00:00:0001
// setTimeout(count, 1000, 2);

// // 12:00:00:0002
// setTimeout(count, 2000, 3);

let i  = 2;
/* ------------ TODO: why i is not passed with incremented value ------------ */
setInterval( count(i++), 1000);