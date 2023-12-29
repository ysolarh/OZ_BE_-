const todoList = document.getElementById("todo-list");
const todoForm = document.getElementById("todo-form");
const todoArr = [];

// 할일 삭제

// 할일 완료

// 할일 출력
function displayTodos() {
  todoList.textContent = "";
  todoArr.forEach((item) => {
    const todoItem = document.createElement("li");
    const todoCheck = document.createElement("input");
    todoCheck.setAttribute("type", "checkbox");
    todoItem.textContent = item.todoText;
    todoList.appendChild(todoItem);
    todoItem.prepend(todoCheck);
    console.log(todoItem);
  });
}

// 할일 추가
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const toBeAdded = {
    todoText: todoForm.todo.value,
    todoId: new Date().getTime(),
    todoDone: false,
  };
  todoForm.todo.value = "";
  todoArr.push(toBeAdded);
  displayTodos();
});
