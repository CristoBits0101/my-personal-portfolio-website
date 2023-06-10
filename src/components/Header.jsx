// Dependencies.
import { NavLink } from "react-router-dom"

// Images.
import Credly from "../assets/credly.svg"
import GitHub from "../assets/github.svg"
import LinkedIn from "../assets/linkedin.svg"

const Header = () => {
  return (
    <header className="w-100 p-0 m-0">
      <div className="row w-100 p-2 m-0 text-white">

        <div className="col-3 d-flex justify-content-center align-items-center">
          <h1 className="display-6 fw-normal fs-5 fw-normal">CristoBits0101</h1>
        </div>

        <nav className="col-6 d-flex justify-content-center align-items-center gap-5 display-6 fw-normal fs-5">
          <NavLink to='/home' className="text-reset text-decoration-none p-2 menu-effect">
            Home
          </NavLink>
          <NavLink to='/about-me' className="text-reset text-decoration-none p-2 menu-effect">
            About
          </NavLink>
          <NavLink to='/curriculum-vitae' className="text-reset text-decoration-none p-2 menu-effect">
            CV
          </NavLink>
          <NavLink to='/projects' className="text-reset text-decoration-none p-2 menu-effect">
            Projects
          </NavLink>
          <NavLink to='/skills' className="text-reset text-decoration-none p-2 menu-effect">
            Skills
          </NavLink>
          <NavLink to='/contact' className="text-reset text-decoration-none border border-secondary-subtle p-2">
            Let&apos;s Connect
          </NavLink>
        </nav>

        <div  className="col-3 d-flex justify-content-center align-items-center gap-3">
          <img src={LinkedIn} alt="Enlace a linkedin mediante icono"></img>
          <img src={GitHub} alt="Enlace a linkedin mediante icono"></img>
          <img src={Credly} alt="Enlace a linkedin mediante icono"></img>
        </div>

      </div>
    </header>
  )
}

export default Header;
