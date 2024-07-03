import { useContext, useState } from "react";
import { CountContext } from "../context";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CountContext.Provider value={count}>
        <Count count={count} setCount={setCount} />
      </CountContext.Provider>
    </>
  );
}

function Count({ setCount }) {
  return (
    <div>
      <CountRendered />
      <Button setCount={setCount} />
    </div>
  );
}

function CountRendered() {
  const count = useContext(CountContext);
  return <div>{count}</div>;
}


function Button({setCount }) {
  const count = useContext(CountContext);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;
