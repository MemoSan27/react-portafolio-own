import { useState } from 'react';
import './App.css'
import Background from './components/ui/Background'
import Header from './components/ui/Header';
import About from './components/ui/About';
import SmMenu from './components/ui/SmMenu';
import BotonDownload from './components/ui/BotonDownload';
import Skills from './components/ui/Skills';


function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='App'>
      <Background />
      <SmMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      <header id='header' className='header'>
        <nav className='nav'> 
            <div className='nav__autor-name container'> 
                <a onClick={() => setIsOpen(false)}  href='#header' className='nav__autor-link'>
                    <h2 className='nav__autor'>Guillermo Sandoval</h2>
                </a>
    
                <div className='nav__menu'>
                    <a href='#about' className='nav__link'> About Me </a>
                    <a href='#skills' className='nav__link'> Skills </a>
                    <a href='#portafolio' className='nav__link'> Portafolio </a>
                    <a href='#' className='nav__link'> Contact </a>
                </div>
    
                <i onClick={() => setIsOpen(!isOpen)} className='iconShowMenu bx bx-menu'></i>
            </div>
          </nav>
          <Header />
      </header>

      <main className='main'>
        <BotonDownload />
        <About />
        <Skills />
        <section id='portafolio' className='portafolio'> <h4 className='portafolio__title'> Portafolio </h4></section>
      </main>
    </div>
  )
}

export default App
