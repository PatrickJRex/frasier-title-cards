
import './App.css'
import TitleCard from './components/TitleCard'
import { FaLinkedin, FaGithub } from "react-icons/fa6";

function App() {

  return (
    <>
      <div>
        <header className='app-header'>
          <a href="/"><h1 className='app-title'>Frasier Title Card Generator</h1></a>
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
       </div>
    </>
  )
}

export default App
