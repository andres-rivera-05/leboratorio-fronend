import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AgregarLibro } from './AgregarLibro'
import { ActualizarLibro } from './ActualizarLibro'
import { EliminarLibro } from './EliminarLibro'

function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<AgregarLibro/>}></Route>
      <Route path='/actualizar-libro' element={<ActualizarLibro/>}></Route>
      <Route path='/eliminar-libro' element={<EliminarLibro/>}></Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
