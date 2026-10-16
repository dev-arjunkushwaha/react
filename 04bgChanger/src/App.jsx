import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className='w-full h-screen duration-200'
      style={{ backgroundColor: color }}
    >
      <div className='fixed flex flex-wrap
      justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center
        gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>
          <button onClick={() => setColor("red")} className='outline-none px-4 bg-red-600 py-1 rounded-full text-white shadow-lg'
          //style={{ backgroundColor: "red" }}
          >Red</button>

          <button onClick={() => setColor("green")} className='outline-none px-4 bg-green-600 py-1 rounded-full text-white shadow-lg'
          //style={{ backgroundColor: "red" }}
          >Green</button>

          <button onClick={() => setColor("blue")} className='outline-none px-4 bg-blue-600 py-1 rounded-full text-white shadow-lg'
          //style={{ backgroundColor: "red" }}
          >Blue</button>

          <button onClick={() => setColor("yellow")} className='outline-none px-4 bg-yellow-600 py-1 rounded-full text-white shadow-lg'
          //style={{ backgroundColor: "red" }}
          >Yellow</button>

          <button onClick={() => setColor("pink")} className='outline-none px-4 bg-pink-600 py-1 rounded-full text-white shadow-lg'
          //style={{ backgroundColor: "red" }}
          >pink</button>
        </div>
      </div>
    </div>
  )
}

export default App
