import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddItem from './components/AddItem'
import TaskList from './components/TaskList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='h-screen gap-3 w-full flex flex-col justify-center items-center'>
        <div className='text-6xl font-bold'>
          Task Manager
        </div>
        <AddItem />
        <TaskList />
      </div>
    </>
  )
}

export default App
