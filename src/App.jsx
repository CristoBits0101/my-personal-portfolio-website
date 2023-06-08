// Dependencies.
import { BrowserRouter, Routes, Route} from 'react-router-dom'

// Pages.
import Home from './pages/Home.jsx'
import AboutMe from './pages/AboutMe.jsx'
import CurriculumVitae from './pages/CurriculumVitae'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import Error404 from './pages/Error404.jsx'

// Components.
import Header from './components/Header.jsx'

// Styles
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {

  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/curriculum-vitae" element={<CurriculumVitae />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
        </BrowserRouter>
    </>
  )

}

export default App
