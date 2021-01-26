// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// define variables and functions used
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// your code here

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// attach events
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// add todo item on '+' button click:
addTodoBtn.addEventListener('click', addTodo);

// add todo item on pressin 'enter' key in the input:
addTodoInput.addEventListener('keyup', function(e) {
    if(e.keyCode === 13){
        addTodo();
    }
})

// remove Todo Item:
todoListUL.addEventListener('click', removeTodo, {capture: true})

// count and display todos count:
displayTodoItemsCount();