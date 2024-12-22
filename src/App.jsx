import { useState } from 'react'
import './App.css'
import Event from './components/Event'
import Navbar from './components/Navbar'

function App() {

  const [searchTerm, setSearchTerm] = useState('')

  function handleNavbarSearch(term){
    setSearchTerm(term)

  }
  

  return (
    <>
    <Navbar onSearch={handleNavbarSearch}/> 
    <Event searchTerm={searchTerm}/>
    </>
  )
}

export default App
