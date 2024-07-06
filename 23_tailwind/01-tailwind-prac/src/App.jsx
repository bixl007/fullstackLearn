import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ background: "red" }}>Hey there</div>
        <div style={{ background: "green" }}>Hey there</div>
        <div style={{ background: "brown" }}>Hey there</div>
      </div>
      <br />

      <div className="flex justify-center">
        <div className="bg-red-500">Hey there</div>
        <div className="bg-green-500">Hey there</div>
        <div className="bg-yellow-500">Hey there</div>
        <div className="bg-slate-500">Hey there</div>
        <div className="bg-orange-500">Hey there</div>
      </div>
      <br />

      <div className="grid grid-cols-3">
        <div className="bg-red-500">Hey there</div>
        <div className="bg-green-500">Hey there</div>
        <div className="bg-yellow-500">Hey there</div>
      </div>
      <br />

      <div className="grid grid-cols-10">
        <div className="bg-red-500 col-span-4">Hey there</div>
        <div className="bg-green-500 col-span-4">Hey there</div>
        <div className="bg-yellow-500 col-span-2">Hey there</div>
      </div>
      <br />
      
      <div className="flex-row md:flex md:justify-between">
        <div className="bg-red-500">Hey there</div>
        <div className="bg-green-500">Hey there</div>
        <div className="bg-yellow-500">Hey there</div>
        <div className="bg-slate-500">Hey there</div>
        <div className="bg-orange-500">Hey there</div>
      </div>
      <br />

      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="bg-red-500">Hey there</div>
        <div className="bg-green-500">Hey there</div>
        <div className="bg-yellow-500">Hey there</div>
      </div>
      <br />
    </>
  );
}

export default App;
