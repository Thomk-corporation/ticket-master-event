import { useState } from 'react'
import './App.css'
import Event from './components/Event'
import Navbar from './components/Navbar'
import SignupForm from './components/SignupForm'

function App() {
  const [searchTerm, setSearchTerm] = useState('')

  function handleNavbarSearch(term) {
    setSearchTerm(term)
  }

  return (
    <>
      {/* <Navbar onSearch={handleNavbarSearch}/> 
    <Event searchTerm={searchTerm}/> */}

      <SignupForm />
    </>
  )
}

export default App
