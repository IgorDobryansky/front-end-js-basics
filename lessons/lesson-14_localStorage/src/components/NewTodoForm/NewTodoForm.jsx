import { useState } from "react";

export default function NewTodoForm(props) {
  const { addTodo } = props;
  const [value, setValue] = useState("");

  const onSubmit = (e) => {
    e.preventDefault;
    if (!value) return;
    addTodo(value);
    setValue("");
   
  };

  return (
    <form>
      <div>
        <label htmlFor="todo-input">Enter todo text</label>
        <input
          type="text"
          className="todo-input"
          id="todo-input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <button
        type="button"
        onClick={onSubmit}
      >
        Add todo
      </button>
    </form>
  );
}
