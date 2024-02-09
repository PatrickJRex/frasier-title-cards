
import { useEffect, useState } from 'react';
import './App.css'
import TitleCard from './components/TitleCard'
import TitleCardTitle  from './components/TitleCardTitle'
import { FaLinkedin, FaGithub } from "react-icons/fa6";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false);
    }, 3000);
  })
  return (
    <>
      {!isLoading ? (
        <div>
          <main className='fade-in-fwd'>
        <header className='app-header'>
          <a href="/"><h1 className='app-title'><span>F</span>rasier <span>T</span>itle <span>C</span>ard <span>G</span>enerator</h1></a>
          <nav className="socials">
            <a href="https://www.linkedin.com/in/patrickjrex/" rel='noopener noreferrer' target='_blank'>
            <FaLinkedin />
            </a>
            <a href="https://github.com/patrickjrex" rel='noopener noreferrer' target='_blank'>
            <FaGithub />
            </a>
          </nav>
        </header>
        <TitleCard/>
        </main>
        <footer className='site-footer'>
          &copy; {new Date().getFullYear()} | Patrick Rex
        </footer>
       </div>
      ) : (
        <>
        <TitleCardTitle className="title-card-title" width="80vw" height="80vh" />
        </>
      )}
    </>
  )
}

export default App
