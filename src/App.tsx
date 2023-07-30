import { useEffect } from 'react';
import { AllRoutes } from './AllRoutes'
import './App.css'
import { Footer } from './Components/Footer/Footer'
import { Menu } from './Components/Menu/Menu'

function App() {

  return (
    <>
      <Menu />
      <AllRoutes />
      <Footer />
    </>
  )
}

export default App
