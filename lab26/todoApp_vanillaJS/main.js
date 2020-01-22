// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// define variables and functions used
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const createTodoItem = function(todoText, parentNode) {
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${todoText}</span>
        <i class="far fa-trash-alt removeTodo"></i>
    `

    parentNode.appendChild(li);
};

const countTodoItems = function(todoListUL) {
    let count = todoListUL.children.length || 0;
    return count;
}

const displayTodoItemsCount = function() {
    let output = document.querySelector('.todoList .total>.output');

    output.innerHTML = countTodoItems(nodes.todoListUL);
}
const addTodoHandler = function() {
    // get the input text:
    const todoText = nodes.addTodoInput.value;
    console.log(todoText);

    // add todo item at the end
    createTodoItem(todoText, nodes.todoListUL);

    // clear input text
    nodes.addTodoInput.value = '';

    // focus on input for new todo:
    nodes.addTodoInput.focus();
}

let nodes = {
    'todoListUL': document.querySelector('.todoList-items>ul'),
    'addTodoInput': document.querySelector('.addTodo>input'),
    'addTodoBtn': document.querySelector('.addTodo>.btnAdd'),
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// attach events
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
nodes.addTodoBtn.addEventListener('click', addTodoHandler);



nodes.addTodoBtn.addEventListener('keyup', function(e) {
    if(e.keyCode === 13){
        addTodoHandler();
    }
});
nodes.addTodoInput.addEventListener('keyup', function(e) {
    if(e.keyCode === 13){
        addTodoHandler();
    }
})

// to remove Todo Item:
nodes.todoListUL.addEventListener('click', function(e) {
    console.log(e.target);
    if(e.target.classList.contains('removeTodo')){
        e.target.parentNode.remove();
    }
})

displayTodoItemsCount();