
function App() {


  return (
    <>
      <CardWrapper>Hi there!!</CardWrapper>
    </>
  )
}

// function TextComponent() {
//   return <div>
//     Hello World
//   </div>
// }


function CardWrapper({children}){
  return <div style={{border: "2px solid black"}}>
    {children}
  </div>
}

export default App
