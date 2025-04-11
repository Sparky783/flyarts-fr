import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AdminAccountContext } from "./AdminLoginContext";
import { Dropdown, NavDropdown } from "react-bootstrap";

export default function AdminHeader() {
  const { user, setUserData } = useContext(AdminAccountContext);

  const handleClickLogout = async (event: any) => {
    setUserData(null);
  }

  return <header>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand">FlyArts Admin</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMenu" aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div id="navbarSupportedContent" className="collapse navbar-collapse">
        <div className="me-auto mb-2 mb-lg-0"></div>
        <ul className="navbar-nav d-flex">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/admin">Accueil</NavLink>
          </li>

          {true &&
            <li className="nav-item">
              <NavLink className="nav-link" to="/admin/users">Administrateurs</NavLink>
            </li>
          }

          <NavDropdown title="Profil" menuVariant="dark">
            <NavDropdown.Item href="/admin/profile">Profil</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={handleClickLogout}>Se déconnecter</NavDropdown.Item>
          </NavDropdown>
        </ul>
      </div>
    </nav>
  </header>
}