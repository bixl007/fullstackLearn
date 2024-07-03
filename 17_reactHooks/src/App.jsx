import axios from "axios";
import { useEffect, useState } from "react";

//     useEffect

// function App() {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     axios.get("https://sum-server.100xdevs.com/todos").then(function (res) {
//       setTodos(res.data.todos);
//     });
//   }, []);

//   return (
//     <>
//       {todos.map((todo) => (
//         <Todo title={todo.title} description={todo.description} />
//       ))}
//     </>
//   );
// }


//              useEffect task to extract todo based on id



// function Todo({ title, description }) {
//   return (
//     <div>
//       <h1>{title}</h1>
//       <h3>{description}</h3>
//     </div>
//   );
// }

// function App() {
//   return <>
//   <Todo id={5}/>
//   </>;
// }

// function Todo({id}) {
//   const [todo, setTodo] = useState({});

//   useEffect(() => {
//     axios.get("https://sum-server.100xdevs.com/todo?id=" + id)
//     .then( (response) => {
//       setTodo(response.data.todo)
//     })
//   }, [])

//   return (
//     <div>
//       <h1>{todo.title}</h1>
//       <h3>{todo.description}</h3>
//     </div>
//   );
// }


//                            button pagination



function App() {

  const [button, setButton] = useState(1)



  return <>
    <button onClick={() => {setButton(1)}}>1</button>
    <button onClick={() => {setButton(2)}}>2</button>
    <button onClick={() => {setButton(3)}}>3</button>
    <button onClick={() => {setButton(4)}}>4</button>
    <button onClick={() => {setButton(5)}}>5</button>

    <Todo id={button}/>

  </>;
}


function Todo({id}) {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todo?id=" + id)
    .then( (response) => {
      setTodo(response.data.todo)
    })
  }, [id])

  return (
    <div>
      <h1>{todo.title}</h1>
      <h3>{todo.description}</h3>
    </div>
  );
}

export default App;
