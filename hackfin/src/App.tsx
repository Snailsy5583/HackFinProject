import { useState } from 'react'
import reactLogo from '/src/output-onlinepngtools.png'


import './App.css'

function App() {
  const [, setCount] = useState(0)

  return (
    <>
      <div>
        
        
          <img src={reactLogo} className="logo react" alt="React logo" />

      </div>
      <h1>Swing into Better Investments</h1>
      <div className="card">
        <button onClick={() => setCount(() => 0)}>
          Start Your Search Today
        </button>
        <p>
          
        </p>
      </div>
      <p className="read-the-docs">
        
      </p>
    </>
  )
}

export default App
