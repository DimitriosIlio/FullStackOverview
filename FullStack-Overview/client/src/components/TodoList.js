import TodoItem from "./TodoItem";

function TodoList({ todos, getAllTodos }) {
  return (
    <>
      <div>
        {/* Render the TodoItem component with todos and getAllTodos function */}
        <TodoItem todos={todos} getAllTodos={getAllTodos} />
      </div>
    </>
  );
}

export default TodoList;
