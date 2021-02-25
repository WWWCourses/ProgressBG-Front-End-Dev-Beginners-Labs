/* ---------------------------- demo with arrays --------------------------- */
let arr1 = [
	[1,2,3],
	[4,5,6],
	5
];

let arr2 = [ ...arr1 ];
// arr2[0] = ref([1,2,3])
// arr2[1] = ref([4,5,6])

arr1[0][0] = 9;
arr1[2] = 9;

console.log(arr2[0]); //[9,2,3]
console.log(arr2[2]); //5

/* ---------------------------- demo with objects --------------------------- */
let user1 = {
	name: {
		first: "maria",
		last: "petrova"
	},
	age: 23
};


// let user2 = { ...user1 }; // from ES6
// let user2 = Object.assign( {}, user1)

// let user2 = {
// 	name: ref({
// 		first: "maria",
// 		last: "petrova"
// 	}),
// 	age:23
// }

//change
// user1.name = "pesho";

// console.log( user2.name ); // ?


// if( user2.name === user1.name){
// 	console.log(`OK`);
// }



