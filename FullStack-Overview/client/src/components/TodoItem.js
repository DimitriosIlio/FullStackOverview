function TodoItem({ getAllTodos, todos }) {
  function deleteTodo(id) {
    // Handle the delete logic here (e.g., make a request to delete the todo with the given id)

    // Update the user interface after you delete a task by calling getAllTodos
    getAllTodos();
  }

  function updateTodo(id) {
    // Add your logic to update a todo item here
  }

  function toggleStatus(id) {
    // Add your logic to toggle the status of a todo item here
  }

  return (
    <div>
      {/* Map through the todos and render each one */}
      {todos.map((todo) => (
        <div key={todo._id}>
          <input type="checkbox" onChange={() => toggleStatus(todo._id)} />
          <span>{todo.text}</span>
          <button onClick={() => deleteTodo(todo._id)}>
            <i className="material-icons">delete</i>
          </button>
          <button onClick={() => updateTodo(todo._id)}>
            <i className="material-icons">edit</i>
          </button>
        </div>
      ))}
    </div>
  );
}

export default TodoItem;
