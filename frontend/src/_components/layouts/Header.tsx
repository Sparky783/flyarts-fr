import { NavLink } from "react-router-dom"

function Header() {
  return <header>
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">FlyArts</NavLink>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainMenu" aria-controls="mainMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div id="mainMenu" className="collapse navbar-collapse">
          <div className="me-auto mb-2 mb-lg-0"></div>
          <ul className="navbar-nav d-flex">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" title="Accueil du site FlyArts">Accueil</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/cv" title="Mon CV en ligne">CV</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/projects" title="Mes projets">Projets</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" title="Contactez-moi si vous avez des questions">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
}

export default Header
