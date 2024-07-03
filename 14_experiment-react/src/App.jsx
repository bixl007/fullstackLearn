import React, { useState } from "react";

// function App() {
//   return (
//     <>
//       <HeaderWithButton />
//       <Header title="harkirat"></Header>
//       <Header title="harkirat"></Header>
//     </>
//   );
// }

// function HeaderWithButton() {
//   const [title, setTitle] = useState("My name is XYRIX");

//   function updateTitle() {
//     setTitle("My name is " + Math.random());
//   }

//   return (
//     <div>
//       <button onClick={updateTitle}>Update to click</button>
//       <Header title={title}></Header>
//     </div>
//   );
// }
// function Header({ title }) {
//   return <div>{title}</div>;
// }

function App() {
  const [title, setTitle] = useState("My name is XYRIX");

  function updateTitle() {
    setTitle("My name is " + Math.random());
  }

  return (
    <>
      <button onClick={updateTitle}>Update the title</button>
      <Header title={title}></Header>
      <Header title="abcd"></Header>
      <Header title="abcd"></Header>
      <Header title="abcd"></Header>
      <Header title="abcd"></Header>
      <Header title="abcd"></Header>
      <Header title="abcd"></Header>
      <Header title="abcd"></Header>
      <Header title="abcd"></Header>
    </>
  );
}

const Header = React.memo(function Header({ title }) {
  return <div>{title}</div>;
});

export default App;
