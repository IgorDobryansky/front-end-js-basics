import { useEffect, useState } from "react";
import Container from "./components/Container/Container";
import FilterTodo from "./components/FilterTodo/FilterTodo";
import InputTodo from "./components/InputTodo/InputTodo";
import NewTodoForm from "./components/NewTodoForm/NewTodoForm";
import TodoList from "./components/TodoList/TodoList";

const App = () => {
  const [todos, setTodos] = useState({ globalId: 0, todos: [] });

  useEffect(() => {
    if (localStorage.getItem("todos")) {
      setTodos(JSON.parse(localStorage.getItem("todos")));
    } else {
      localStorage.setItem("todos", JSON.stringify({ globalId: 0, todos: [] }));
    }
  }, []);

  const addTodo = (text) => {
    setTodos((current) => ({
      ...current,
      globalId: current.globalId + 1,
      todos: [...current.todos, { text, done: false, id: current.globalId }]
    }));
    const localStorageTodos = JSON.parse(localStorage.getItem("todos"));
    localStorage.setItem(
      "todos",
      JSON.stringify({
        ...localStorageTodos,
        globalId: localStorageTodos.globalId + 1,
        todos: [
          ...localStorageTodos.todos,
          { text, done: false, id: localStorageTodos.globalId }
        ]
      })
    );
  };

  const deleteTodo = (id) => {
    const deletedTodoIndex = todos.todos.findIndex((todo) => todo.id === id);
    if (deletedTodoIndex === -1) return;
    setTodos((current) => {
      return {
        ...current,
        todos: [
          ...current.todos.slice(0, deletedTodoIndex),
          ...current.todos.slice(deletedTodoIndex + 1)
        ]
      };
    });

    const localStorageTodos = JSON.parse(localStorage.getItem("todos"));
    localStorage.setItem(
      "todos",
      JSON.stringify({
        ...localStorageTodos,
        todos: [
          ...localStorageTodos.todos.slice(0, deletedTodoIndex),
          ...localStorageTodos.todos.slice(deletedTodoIndex + 1)
        ]
      })
    );
  };

  const chngStatus = (id) => {
    setTodos((current) => {
      return {
        ...current,
        todos: current.todos.map((todo) => {
          if (todo.id === id) {
            todo.done = !todo.done;
          }
          return todo;
        })
      };
    });

    const localStorageTodos = JSON.parse(localStorage.getItem("todos"));
    localStorage.setItem(
      "todos",
      JSON.stringify({
        ...localStorageTodos,
        todos: localStorageTodos.todos.map((todo) => {
          if (todo.id === id) {
            todo.done = !todo.done;
          }
          return todo;
        })
      })
    );
  };

  return (
    <Container>
      <InputTodo>
        <NewTodoForm addTodo={addTodo} />
      </InputTodo>
      <FilterTodo />
      <TodoList
        todos={todos.todos}
        deleteTodo={deleteTodo}
        chngStatus={chngStatus}
      />
    </Container>
  );
};

export default App;
