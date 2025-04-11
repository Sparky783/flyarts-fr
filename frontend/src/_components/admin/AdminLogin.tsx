import { useContext, useState } from "react";
import { AdminAccountContext } from "./AdminLoginContext";

async function loginAdmin(credentials: any) {
  return fetch('http://localhost:3000/admins/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(async response => [response.status, await response.json()])
}

export default function AdminLogin({ setToken }: any) {
  const {user, setUserData} = useContext(AdminAccountContext);

  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const [status, data] = await loginAdmin({
      email,
      password
    });

    if (status !== 201) {
      setError(data.message);
      return;
    }

    setError("");
    data.isAdmin = data.status === "admin";
    
    // Store admin details and jwt token in local storage to keep admin logged in between page refreshes (developpement)
    setUserData(data);
  }

  return <div className="container">
    <div className="row">
      <div id="title" className="col-md-12">
        <h1 className="text-center">FlyArts</h1>
      </div>

      <section id="loginForm" className="col-md-4 offset-md-4">
        <div className="card flyarts-border">
          <div className="card-header flyarts-bg text-center">
            Espace administrateur
          </div>

          <form className="card-body" onSubmit={handleSubmit}>
            {error && <div className="alert alert-danger">
              {error}
            </div>}

            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input className="form-control" type="email" onChange={e => setEmail(e.target.value)} placeholder="Enter email" />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input className="form-control" type="password" onChange={e => setPassword(e.target.value)} placeholder="Password" />
            </div>

            <div className="form-group form-check">
              <input className="form-check-input" type="checkbox" name="rememberme-admin" />
              <label className="form-check-label" htmlFor="rememberme-admin">Se souvenir de moi</label>
            </div>

            <button type="submit" className="btn btn-secondary">Se connecter</button>
          </form>
        </div>
      </section>
    </div>
  </div>
}