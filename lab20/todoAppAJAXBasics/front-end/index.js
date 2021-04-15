
const renderTodos = function(todos) {
	// clean current todos:
	nodes.todoItems.innerHTML = '';

	// add todo item at the end
	todos.forEach( todo => {
		nodes.todoItems.innerHTML += `
		<li data-id=${todo.id} >
			<span class="todoID">${todo.id}.</span>
			<span class="${todo.completed?'completed':''}">${todo.title}</span>
			<div class="removeTodo"><i class="far fa-trash-alt"></i></div>
		</li>
		`;
	})


	// todos = [...todos, {"id":4, "title": "Sleep"}];
	// console.log(todos);
	// console.log(JSON.stringify(todos));


}

const getTodos = function (url) {
	fetch(url)
		.then(response => response.json())
		.then(data => {
			renderTodos(data);
		});
}


apiURL = "/back-end/data/todos.json";

// The data. In real app, the data come from a server

// DOM cache:
const nodes = {
	'todoItems': document.querySelector('ul.todo-items'),
	'addTodoInput': document.querySelector('.todo-add>input'),
	'addTodoBtn': document.querySelector('.todo-add>.todo-add-btn'),
	'totalItemsCount': document.querySelector('.todo-app .todos-total>.output')
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// attach events
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
window.addEventListener('DOMContentLoaded', function(e) {
	getTodos(apiURL);
});