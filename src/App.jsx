import React from 'react'
import Nav from './components/Nav'
import Home from './pages/Home'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='min-h-screen w-screen bg-background'>

      <Nav />
      <Home />
      <Footer />

    </div>
  )
}

export default App