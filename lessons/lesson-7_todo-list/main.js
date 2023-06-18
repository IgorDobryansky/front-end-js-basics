function todoList() {

  const inputForm = document.querySelector("form");
  const submitButton = inputForm.querySelector("button");
  const todoText = inputForm.querySelector("input");
  const todosList = document.querySelector(".show-todo");

  const todosFilterSection = document.querySelector(".filter-todo");

  const filterSelect = document.createElement("select");
  filterSelect.className = "filter-select";

  const filterSelectOptionAll = document.createElement("option");
  filterSelectOptionAll.selected = true;
  filterSelectOptionAll.textContent = "All";
  filterSelectOptionAll.value = "all";

  const filterSelectOptionDone = document.createElement("option");
  filterSelectOptionDone.textContent = "Done";
  filterSelectOptionDone.value = "done";

  const filterSelectOptionUndone = document.createElement("option");
  filterSelectOptionUndone.textContent = "In progress";
  filterSelectOptionUndone.value = "undone";

  filterSelect.addEventListener("change", (event) => {
    const filteredValue = event.target.value;
    const todos = [...document.querySelectorAll(".todo-item")];

    if (filteredValue === "done") {
      todos.map((item) => {
        item.style.display = "flex";
      });
      todos.map((item) => {
        if (item.dataset.done === "false") item.style.display = "none";
      });
    } else if (filteredValue === "undone") {
      todos.map((item) => {
        item.style.display = "flex";
      });
      todos.map((item) => {
        if (item.dataset.done === "true") item.style.display = "none";
      });
    } else {
      todos.map((item) => {
        item.style.display = "flex";
      });
    }
  });

  filterSelect.append(
    filterSelectOptionAll,
    filterSelectOptionDone,
    filterSelectOptionUndone
  );
  todosFilterSection.append(filterSelect);

  submitButton.addEventListener("click", (event) => {
    // предотвращаем событие по умолчанию - обновление страницы
    event.preventDefault();
    // проверяем на наличие текста в интпуте
    if (!todoText.value.trim()) {
      // если в инпуте нет символов, то очищаем его и останавливаем функцию
      todoText.value = "";
      return;
    }
    // если в инпуте есть символы - выполняем действия...
    const todoItem = document.createElement("div");
    todoItem.className = "todo-item";
    todoItem.dataset.done = false;
    const todoItemId = document.createElement("span");
    todoItemId.className = "todo-item-id";
    const todoItemText = document.createElement("span");
    todoItemText.className = "todo-item-text";
    todoItemText.innerText = todoText.value;
    const actions = document.createElement("div");
    const toggleDoneTodoItem = document.createElement("button");
    toggleDoneTodoItem.innerText = "Chng status";
    const deleteTodoItem = document.createElement("button");
    deleteTodoItem.innerText = "Delete";
    deleteTodoItem.addEventListener("click", () => {
      todoItem.remove();
      addTodoNumber();
    });

    toggleDoneTodoItem.addEventListener("click", () => {
      if (todoItem.dataset.done === "false") {
        todoItem.classList.add("done");
        todoItem.dataset.done = "true";
        //   todoItem.children[0].classList.remove("done");
        //   todoItem.children[1].classList.remove("done");
        return;
      }
      todoItem.classList.remove("done");
      //   todoItem.children[0].classList.add("done");
      //   todoItem.children[1].classList.add("done");
      todoItem.dataset.done = "false";
    });
    actions.append(toggleDoneTodoItem, deleteTodoItem);
    todoItem.append(todoItemId, todoItemText, actions);
    todosList.append(todoItem);
    addTodoNumber();
    // todos.push(todoItem);
    // очистим инпут после действий
    todoText.value = "";
  });

  function addTodoNumber() {
    const todos = [...document.querySelectorAll(".todo-item")];
    todos.map((todo, index) => {
      todo.children[0].innerText = index + 1 + ".";
    });
  }
}

todoList();
