// let Math = {
// 	'PI':3.14,
// 	'pow': function (a,b) {
// 		return a**b
// 	}
// }
// console.log(Math.pow(3,3));


/* ---------------------------------- Date ---------------------------------- */
// let now = new Date();

// // console.dir(now.getTime());
// // console.log(now.getTime());

// console.log(now.getDay());
// console.log(now.getHours());

/* -------------------------------- arguments ------------------------------- */
// function sum() {
// 	// console.dir(arguments);

// 	let sum = 0;
// 	for (let i = 0; i < arguments.length; i++) {
// 		const element = arguments[i];
// 		sum+=element
// 	}

// 	console.log(sum);
// }

// sum()
// sum(1,2)
// sum(1,2,3)


/* ---------------------------- Wrapptig (Boxing) --------------------------- */
// let obj = "abc";
// console.dir( new String() );

// let sentence = "word1 word2 word3";
// let sentenseObj = new String(sentence);
// let words = sentenseObj.split(' ')

// for (let i = 0; i < words.length; i++) {
// 	const word = words[i];
// 	console.log(word.toUpperCase() );
// }


// let words =  "word1 word2 word3".split(' ');
// let words =  (new String("word1 word2 word3")).split(' ');

// console.log( words);


// strings are not objects
let obj = {
	'str': 'abc'
}
obj.id = 1;
console.log( obj.id );


let str = 'abc';
// str.id = 1;
// (new String(str)).id = 1;
console.log( str.id );


