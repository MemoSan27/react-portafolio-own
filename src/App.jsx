import { useState } from 'react';
import './App.css'
import Background from './components/ui/Background'
import Header from './components/ui/Header';
import About from './components/ui/About';


function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='App'>
      <Background />
      <Header />
     
     <main className='main'>
      <About />
     </main>
    </div>
  )
}

export default App
