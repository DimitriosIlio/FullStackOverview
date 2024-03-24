// AddTodo component
import { useState } from "react";

function AddTodo({ getAllTodos }) {
  const [todo, setTodo] = useState({
    text: "",
    status: "pending",
  });

  // Handle input change when user types in a new task
  function handleInputChange(e) {
    setTodo({ ...todo, text: e.target.value });
  }

  // Function to add a new task
  const addNewTodo = () => {
    // Add your logic here to send a request to add a new todo to the database

    // Call the function to update the user interface immediately without refreshing the page
    getAllTodos();
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add a task..."
        onChange={handleInputChange}
        value={todo.text}
      />
      <button onClick={addNewTodo}>Add</button>
    </div>
  );
}

export default AddTodo;
