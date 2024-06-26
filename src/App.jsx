import {Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Main from './pages/Main'
import Currencies from './pages/Currencies'
import Price from './pages/Price'
import './App.css'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/currencies' element={<Currencies/>} />
        <Route path='/price' element={<Price/>} />
        <Route path='/price/:symbol' element={<Price/>} />
      </Routes>
    </>
  )
}

export default App