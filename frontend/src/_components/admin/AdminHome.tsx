import { useContext, useState } from "react"
import AdminLogin from "./AdminLogin";
import { AdminAccountContext } from "./AdminLoginContext";
import { NavLink } from "react-router-dom";

export default function AdminHome() {
  const {user, setUserData} = useContext(AdminAccountContext);

  let links: any[] = [
    <NavLink className='btn btn-secondary btn-lg btn-block' to="/admin/projects"><i className='fas fa-cog'></i> Projets</NavLink>,
    <NavLink className='btn btn-secondary btn-lg btn-block' to="/admin/users"><i className='fas fa-cog'></i> Administrateurs</NavLink>
  ];

  const handleClickLogout = async (event: any) => {
    setUserData(null);
  }

  return <div className="container">
    <div className="row">
      <div id="title" className="col-md-12">
        <h1 className="text-center">Bonjour, {user?.name}</h1>
      </div>
      <section id="loginForm" className="col-md-6 offset-md-3">
        <div className="card flyarts-border">
          <div className="card-header flyarts-bg text-center">
            Espace administrateur
          </div>
          <div className="card-body">
            <div className="links d-grid gap-2">
              {links.map(link => {
                return link
              })}
              <span className="separator"></span>
              <a className="btn btn-danger btn-lg btn-block" onClick={handleClickLogout}>Se déconnecter</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
}