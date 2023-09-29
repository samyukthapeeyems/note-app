import { useState } from 'react'
import imgUrl from './assets/bg1.jpeg';
import Home from './pages/Home'
import Form from './components/Form';

function App() {
  const [count, setCount] = useState(0)
  console.log(imgUrl)

  
    




  return (
    <>
      <div className='h-screen w-screen bg-gray-100'>
    <Home></Home>

    </div>

    </>
  )
}

export default App
