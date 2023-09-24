import { useState } from 'react'
import imgUrl from './assets/bg.webp';
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)
  console.log(imgUrl)

  return (
    <>
    <div style={{backgroundImage: `url(${imgUrl})`}} className='h-full w-full bg-cover '>
    <Home></Home>

    </div>
    </>
  )
}

export default App
