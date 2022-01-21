import './App.css'
import { HashRouter as BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Contact from './components/contact/Contact'
import Projects from './components/projects/Projects'
import Start from './components/start/Start'
import Intro from './components/intro/Intro'
import Footer from './components/footer/Footer'


function App() {
  return (
    <BrowserRouter>
    <div className="app">
        <Intro />
        <Start />
        <div className="navbar">
          
        </div>
        <div className="main-container">
          {/* <Routes className="main-route">
            <Route exact path="/" element={<Home />} />
            <Route path="/projects" element={<Projects id="projects" />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes> */}
          <Navbar />
          <Home id="home"/>
          <Projects id="projects"/>
          <Contact id="contact"/>
          <Footer /> 
        </div>
        

      
    </div>
    </BrowserRouter>
    
  )
}

export default App
