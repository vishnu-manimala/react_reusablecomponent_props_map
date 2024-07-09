import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)
  const data =[
    {id:1, name:"Vishnu", email: "vishnu123@gmail.com"},
    {id:2, name:"Shilpa", email: "shlpa123@gmail.com"}
  ] 

  return (
    <>
      <Card items= {data}/>
    </>
  )
}

export default App
