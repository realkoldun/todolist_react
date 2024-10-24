import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(props) {
  const [count, setCount] = useState(0)
  console.log(props)

  return (
    <>
      <header>
        <h1>Hello, {props.subject}!</h1>
        <button type="button" className='primary'> 
          Click on me!</button>
      </header>
    </>
  )
}

export default App
