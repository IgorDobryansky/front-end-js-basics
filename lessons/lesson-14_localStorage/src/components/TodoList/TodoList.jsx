import TodoItem from "../TodoItem/TodoItem";

export default function TodoList(props) {
  const { todos, deleteTodo, chngStatus } = props;

  return (
    <section className="show-todo">
      {!!todos && !!todos.length
        ? todos.map((todo, index) => (
            <TodoItem
              todo={todo}
              number={index}
              key={index}
              deleteTodo={deleteTodo}
              chngStatus={chngStatus}
            />
          ))
        : "No todos"}
    </section>
  );
}
