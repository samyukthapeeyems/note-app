import { useState } from 'react'
import imgUrl from './assets/bg1.jpeg';
import Home from './pages/Home'
import Form from './components/Form';

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
