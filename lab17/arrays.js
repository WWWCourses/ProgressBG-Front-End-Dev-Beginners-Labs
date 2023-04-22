// TASK: log userName with highest score
// 	Maria: 5
// 	Ivan : 4
// 	Asen: 3


/* ------------------ Array Intro (internal representation) ----------------- */
// let userName1 = 'Maria'
// let user1Score = 5
// let userName2 = 'Ivan'
// let user2Score = 4

// RAM:
// 	userName1: 0x1234=>'Maria'
// 	userName2: 0x1245=>'Ivan'
// 	..

// if(user1Score>user2Score){
// 	console.log(userName1);
// }

// let x  = 1;
// let userNames= ['Maria','Ivan','Asen'];

// RAM:
// 	userNames:
// 	userNames[0]: 0x1234=>'Maria'
// 	userNames[1]: 0x1245=>'Ivan'

/* ------------------------------ Array Basics ------------------------------ */
// let arr = [1, 'a', 3.5]
// let arr2 = 'a'
// arr2 = 'b'

// RAM:
// 	arr[0]: 0x12343: 1
// 	arr[1]: 0x12343: 'a'
// 	arr[2]: 0x12343: 3.5


// console.log( arr[1] );
// console.log( arr[3-2] );
// let i = 1;
// console.log( arr[i] );

// change 'a' => 'b'
// arr[1]='b'
// console.log(arr); // [1,'b',3.5]

// let arr2;
// console.log(arr2);
// let arr = [1,2,3]

// console.log( arr3 );// arr4 is not defined
// console.log(arr[3]); // undefined

// arr[10]=9
// console.log(arr);

// RAM:
//  arr   : 0x11111:  0x12343, 0x12344, 0x12345
// 	1. arr[0]: 0x12343: 1
// 	2. arr[1]: 0x12344: 2
// 	3. arr[2]: 0x12345: 3
// 	4. arr[3]: 0x12346: empty
// 	5. arr[3]: 0x12346: 9

// let arr = []
// arr[0] = 1
// arr[1] = 2

// console.log( arr );
// arr[1] = 9
// console.log( arr );

/* ---------------------------- Array are object ---------------------------- */
// let x = 1;
// let arr = [1]
// console.log( typeof(x));
// console.log( typeof(arr));

// let arr = [1,2,3]
// console.log( arr[100] );
// console.log( arr['a'] );

// arr['a'] = 4
// console.log( arr );

// let users = [];
// let userName ='Maria'


// users[0] = userName;
// console.log(users);

// userName = 'Asen';
// users[1] = userName;
// console.log(users);


// let arr = [1,2,3]
// arr.shift();
// console.log(arr); //[2,3]

// arr.push(4)
// console.log(arr); //[2,3,4]

/* ---------------------------- get array length ---------------------------- */
// let arr = [1,2,3];
// console.log( arr.length );
// console.log( arr );

// arr.push(4)
// console.log( arr.length );
// console.log( arr );

// arr.length = 1;
// console.log(arr);//[1]


// let arr = [1,2,3,4];

// show the last array element:
// console.log( arr[arr.length-1]);
// console.log( arr[3]);

// TASK: if users is empty => 'NO USERS', else => log users

// let users = [1,2,3];
// console.log( users.lenght );
// console.log( users.length );

// if (  users.lenght===0  ) {
// 	console.log(`NO USERS`);
// }else{
// 	console.log('BRAVO');
// }

// console.log(users);


/* ----------------------------- Loop over array ---------------------------- */
// let arr = [1,2,3]
// console.log( arr.length );
// console.log( arr[0] );
// console.log( arr[1] );
// console.log( arr[2] );

// for(let i=0; i<arr.length;i++){
// 	console.log( arr[i] );
// }

// for(let i = arr.length-1; i>=0; i-- ){
// 	console.log(`i=${i}`);
// 	console.log( arr[i] );
// }


// TASK: sum array elements
// let arr = [2,3,4]
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
// 	let element = arr[i];
// 	// console.log(element);
// 	sum+=element;
// }
// console.log(`sum = ${sum}`);


/* ----------------------------- Array of arrays ---------------------------- */
// let x = 3;
// let arr = [ x-3 , 'a'+'b'];
// console.log( arr );// [0, 'ab']

let arr = [
	[1,2,3],
	[4,5,6],
	[7,8,9]
];
// console.log( arr[1] ); // [ 4, 5, 6 ]
// console.log( arr[2][0] ); // 7

// TASK: sum array elements
let sum = 0;
for (let i = 0; i < arr.length; i++) {
	let row = arr[i];
	// console.log(row);

	for (let j = 0; j < row.length; j++) {
		// console.log(i,j);
		// console.log( row[j] );
		sum+=row[j]
	}
}

console.log(`sum = ${sum}`);








