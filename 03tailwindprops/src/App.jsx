import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './Components/Card'

export default function App() {
  let myObj = {
    userName: "Arjun",
    age: "21"
  }
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">
        Tailwind test
      </h1>
      <Card channel="chaiaurcode" someObject={myObj} />
      <Card />
    </>
  )
}

//export default App
