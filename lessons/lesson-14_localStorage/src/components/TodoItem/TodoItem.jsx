export default function TodoItem(props) {
  const { todo, deleteTodo, chngStatus, number } = props;
  const { id, done, text } = todo;

  return (
    <div
      className="todo-item"
      style={{ textDecoration: done ? "line-through" : "" }}
    >
      <span>{number + 1}.</span>
      {text}
      <div>
        <button onClick={()=> chngStatus(id)}>Chng status</button>
        <button onClick={() => deleteTodo(id)}>Delete</button>
      </div>
    </div>
  );
}
