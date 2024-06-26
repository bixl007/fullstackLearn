import { useState } from "react";
let counter = 4;
function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Go to gym",
      description: "go to gym today",
    },
    {
      id: 2,
      title: "eat food",
      description: "eat food now",
    },
    {
      id: 3,
      title: "Go to school",
      description: "go to school now",
    },
  ]);

  function addTodo() {
    setTodos([
      ...todos,
      {
        id: counter++,
        title: Math.random(),
        description: Math.random(),
      },
    ]);
  }

  return (
    <>
      <button onClick={addTodo}>Click to add todo</button>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} description={todo.description} />
      ))}
    </>
  );
}

function Todo({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <h5>{description}</h5>
    </div>
  );
}

export default App;
