import { useEffect } from "react"

function App() {
 
  useEffect(function() {
    alert("hii");
  },[])



  return (

    <>
      Hii there
    </>
  )
}

export default App
