import './App.css'
import { HashRouter as BrowserRouter } from "react-router-dom"
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Contact from './components/contact/Contact'
import Projects from './components/projects/Projects'
import Start from './components/start/Start'
import Intro from './components/intro/Intro'
import Footer from './components/footer/Footer'


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <div className="app">
      
      <div>
        <Intro />
        <Start />
        </div>
        
        <div className="main-container">
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
