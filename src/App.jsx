// Dependencies.
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// Pages.
import Home from './pages/home/Home.jsx'
import AboutMe from './pages/home/AboutMe.jsx'
import CurriculumVitae from './pages/home/CurriculumVitae'
import Projects from './pages/home/Projects'
import Skills from './pages/home/Skills'
import Contact from './pages/home/Contact'
import Error404 from './pages/404/Error404'

// Components.
import Nav from './components/pure/Nav'

// Styles
import './App.css'


function App() {

  return (
    <>
      <BrowserRouter>
        <Nav />
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
