import { useEffect, useState } from "react";
import axios from "axios";

function useTodos() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
      setTodos(res.data.todos);
      setLoading(false);
    });
  }, []);

  return { todos, loading };
}


function App() {
  const { todos, loading } = useTodos();
  if (loading) {
    return <div>Loading.......</div>;
  }

  return (
    <>
      {todos.map((todo) => (
        <Track todo={todo} />
      ))}
    </>
  );
}

function Track({ todo }) {
  return (
    <div>
      {todo.title}
      <br />
      {todo.description}
    </div>
  );
}

export default App;

/*
import React, { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [render, setRender] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setRender(false);
    }, 5000);
  }, []);

  return <>{render ? <MyComponent /> : <div>Unmounted</div>}</>;
}

// function MyComponent() {
//   const [count, setCount] = useState(0);

//   const incrementCount = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={incrementCount}>Increment</button>
//     </div>
//   );
// }

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }

//   incrementCount = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   render() {
//     return (
//       <div>
//         <p>{this.state.count}</p>
//         <button onClick={this.incrementCount}>Increment</button>
//       </div>
//     );
//   }
// }

function MyComponent() {
  useEffect(() => {
    console.error("Component Mounted");

    return () => {
      console.log("Component Unmounted");
    };
  }, []);

  return <div>From inside the Component</div>;
}

export default App;
*/
