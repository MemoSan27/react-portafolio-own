import { useState } from 'react';
import './App.css'
import Background from './components/ui/Background'
import Header from './components/ui/Header';
import About from './components/ui/About';
import SmMenu from './components/ui/SmMenu';


function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='App'>
      <Background />
      <SmMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      <header id='header' className='header'>
        <nav className='nav'> 
            <div className='nav__autor-name container'> 
                <a onClick={() => setIsOpen(!isOpen)}  href='#header' className='nav__autor-link'>
                    <h2 className='nav__autor'>Guillermo Sandoval</h2>
                </a>
    
                <div className='nav__menu'>
                    <a href='#about' className='nav__link'> About Me </a>
                    <a href='#' className='nav__link'> Skills </a>
                    <a href='#' className='nav__link'> Portafolio </a>
                    <a href='#' className='nav__link'> Contact </a>
                </div>
    
                <i onClick={() => setIsOpen(!isOpen)} className='iconShowMenu bx bx-menu'></i>
            </div>
          </nav>
          <Header />
      </header>

      <main className='main'>
        <About />
      </main>
    </div>
  )
}

export default App
