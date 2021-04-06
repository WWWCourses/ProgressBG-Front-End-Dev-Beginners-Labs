let todos = [
	{
		"id": 1,
		"title": "LEARN HTML",
		"completed":false
	},
	{
		"id": 2,
		"title": "Learn CSS",
		"completed":false
	}
];

// remove element from array of objects by property value
let id = 2;

// Variant 1
// for (let i = 0; i < todos.length; i++) {
// 	const element = todos[i];

// 	if(element.id === id){
// 		todos.splice(i,1)
// 	}
// }

// Varaint 2:
let idx = todos.findIndex( el => id === el.id );
todos.splice(idx,1)

console.dir(todos);

