function count(x) {
	return function () {
		console.log(x);
		x++;
	}
}

// 12:00:00:0000
console.log(`1`);


// 12:00:00:0001
// setTimeout(count, 1000, 2);

// // 12:00:00:0002
// setTimeout(count, 2000, 3);

let i  = 1;
// console.log( i++ );

setInterval( count(i), 1000);
