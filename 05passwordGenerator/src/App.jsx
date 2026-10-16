import { useState, useCallback, useEffect, useRef } from 'react'

function App() {

  //useRef hook
  const [password, setPassword] = useState("")
  const passwordRef = useRef(null)
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const passwordGenerator = useCallback(() => {
    let pass = ("")
    let str = ("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz")
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "`!@#$%^&*()[]{};'/~"
    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])
  useEffect(() => { passwordGenerator() }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-500'>
        <h1 className='text-white text-center my-5 text-lg'>PasswordGenerator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(Number(e.target.value))}

            />
            <label>Length:{length}</label>
          </div>
          <div className='flex items-center gap-1'>
            <input
              type='checkbox'
              checked={numberAllowed}
              id="numberInput"
              onChange={(e) => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>

          <div className='flex items-center gap-1'>
            <input
              type='checkbox'
              checked={charAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor='charInput'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App














/**import { useState, useCallback, useEffect } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (numberAllowed) str += '0123456789'
    if (charAllowed) str += "`!@#$%^&*()[]{};'/~"

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type='text'
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
          />
        </div>

        <div className='flex text-sm gap-x-2 items-center mb-2'>
          <input
            type='range'
            min={6}
            max={20}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setLength(Number(e.target.value))}
          />
          <label>Length: {length}</label>
        </div>

        <div className='flex items-center gap-x-2 mb-2'>
          <input
            type='checkbox'
            checked={numberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
          <label>Numbers</label>
        </div>

        <div className='flex items-center gap-x-2'>
          <input
            type='checkbox'
            checked={charAllowed}
            onChange={() => setCharAllowed((prev) => !prev)}
          />
          <label>Characters</label>
        </div>
      </div>
    </>
  )
}

export default App*/
