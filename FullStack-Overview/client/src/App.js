// Import necessary components and libraries
import AddTodo from "./components/AddForm";
import TodoList from "./components/TodoList";
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  // Function to get all the tasks from the database
  function getAllTodos() {
    // Your code to fetch todos from the database should go here
  }

  // Render all the tasks on the screen once you open the app
  useEffect(() => {
    // Call the getAllTodos function here to populate the initial todos
    getAllTodos();
  }, []);

  return (
    <div className="App">
      <h1>Todo App</h1>
      <AddTodo getAllTodos={getAllTodos} />
      <TodoList todos={todos} getAllTodos={getAllTodos} />
    </div>
  );
}

export default App;
