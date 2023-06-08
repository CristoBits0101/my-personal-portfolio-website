// Dependencies.
import { NavLink } from "react-router-dom"

// Images.
import Credly from "../assets/credly.svg"
import GitHub from "../assets/github.svg"
import Linkedin from "../assets/linkedin.svg"

export default function Header() {

  const contact = "Let's Connect"

  return (
    <header className="row p-2 w-100 text-black">

        <div className="col-3 d-flex justify-content-center align-items-center text-dark">
          <h1>CristoBits0101</h1>
        </div>

        <nav className="col-6 d-flex justify-content-center gap-5 text-light align-items-center fw-medium text-dark">
          <NavLink to='/home' className="text-reset text-decoration-none">
            Home
          </NavLink>
          <NavLink to='/about-me' className="text-reset text-decoration-none">
            About
          </NavLink>
          <NavLink to='/curriculum-vitae' className="text-reset text-decoration-none">
            CV
          </NavLink>
          <NavLink to='/projects' className="text-reset text-decoration-none">
            Projects
          </NavLink>
          <NavLink to='/skills' className="text-reset text-decoration-none">
            Skills
          </NavLink>
          <NavLink to='/contact' className="text-reset text-decoration-none border border-secondary-subtle p-2">
            {contact}
          </NavLink>
        </nav>

        <div  className="col-3 d-flex justify-content-center gap-3 align-items-center">
          <img src={Linkedin} alt="Enlace a linkedin mediante icono"></img>
          <img src={GitHub} alt="Enlace a linkedin mediante icono"></img>
          <img src={Credly} alt="Enlace a linkedin mediante icono"></img>
        </div>

    </header>
  )

}