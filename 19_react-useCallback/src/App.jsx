
import { memo, useCallback, useState } from "react";

function App() {
  const [count, setCount] = useState(0)

  const inputFunction = useCallback(() => {
    console.log("Rendered");
  },[])



  return <div>
    <Child inputFunction={inputFunction} />
    <button onClick={() => {
      setCount(count + 1);
    }}>Click me {count}</button>
  </div>
}

const Child = memo(() => {
  console.log("child render")

  return <div>
    <button >Button clicked</button>
  </div>
})

export default App;