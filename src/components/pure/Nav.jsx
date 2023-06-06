import React from "react"
import { NavLink } from "react-router-dom"

export default function Nav() {
  return (
    <nav className="navigation-bar">
        <NavLink to='/home'>Home</NavLink>
        <NavLink to='/about-me'>About Me</NavLink>
        <NavLink to='/curriculum-vitae'>CV</NavLink>
        <NavLink to='/projects'>Projects</NavLink>
        <NavLink to='/skills'>Skills</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
    </nav>
  )
}
