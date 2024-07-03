import { useState } from "react";

export function CreateTodo(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
      <input
        id="title"
        type="text"
        onChange={function (e) {
          const value = e.target.value;
          setTitle(e.target.value);
        }}
        placeholder="title"
        style={{
          padding: 10,
          margin: 10,
        }}
      />
      <br />
      <input
        id="desc"
        onChange={function (e) {
          const value = e.target.value;
          setDescription(e.target.value);
        }}
        type="text"
        placeholder="description"
        style={{
          padding: 10,
          margin: 10,
        }}
      />
      <br />

      <button
        style={{
          padding: 10,
          margin: 10,
        }}
        onClick={() => {
          fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: description,
            }),
            headers: {
              "Content-type": "application/json",
            },
          }).then(async function (res) {
            const json = await res.json();
            alert("Todo added");
          });
        }}
      >
        Add a Todo
      </button>
    </div>
  );
}
