import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AgregarLibro } from './AgregarLibro'
import { ActualizarLibro } from './ActualizarLibro'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<AgregarLibro/>}></Route>
      <Route path='/actualizar-libro' element={<ActualizarLibro/>}></Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
