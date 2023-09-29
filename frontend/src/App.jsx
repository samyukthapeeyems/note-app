import { useState } from 'react'
import Home from './pages/Home'
import Form from './components/Form';

function App() {
  const [count, setCount] = useState(0)

  
    




  return (
    <>
      <div className='h-full w-screen bg-gray-100'>
    <Home></Home>

    </div>

    </>
  )
}

export default App
