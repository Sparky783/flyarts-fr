import './assets/css/App.scss'
import { Outlet, RouterProvider, createBrowserRouter, useRouteError } from 'react-router-dom'
import Home from './_components/Home'
import Header from './_components/layouts/Header'
import Footer from './_components/layouts/Footer';
import Projects from './_components/Projects';
import Cv from './_components/Cv';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight, faArrowUpRightFromSquare, faCamera, faDumbbell, faMusic, faPen, fas } from '@fortawesome/free-solid-svg-icons';
import { faGithub, fab } from '@fortawesome/free-brands-svg-icons'
import CvPaper from './_components/CvPaper';
import Contact from './_components/Contact';
import WebSiteProjects from './_components/projects/WebSiteProjects';
import AdminHome from './_components/admin/AdminHome';
import AdminLogin from './_components/admin/AdminLogin';
import AdminProjects from './_components/admin/AdminProjects';
import { AdminAccountProvider } from './_components/admin/AdminLoginContext';
import Admin from './_components/admin/Admin';
import AdminProfile from './_components/admin/AdminProfile';
import AdminUsers from './_components/admin/AdminUsers';

// Add this line for the CV
library.add(fas, faCamera, faMusic, faDumbbell, faArrowUpRightFromSquare);
library.add(fab, faGithub, faArrowRight, faPen);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <PageError />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'projects',
        element: <Projects />,
        children: [
          {
            path: 'websites',
            element: <WebSiteProjects />,
          }
        ]
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'cv',
        element: <Cv />,
      }
    ]
  },
  {
    path: '/admin',
    element: <RootAdmin />,
    children: [
      {
        path: '',
        element: <AdminHome />,
      },
      {
        path: 'login',
        element: <AdminLogin />,
      },
      {
        path: 'profile',
        element: <AdminProfile />,
      },
      {
        path: 'users',
        element: <AdminUsers />,
      },
      {
        path: 'projects',
        element: <AdminProjects />,
      }
    ]
  },
  {
    path: '/cv-papier',
    element: <CvPaper />,
    errorElement: <PageError />
  }
]);

function Root() {
  return <div id="website">
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
  </div>
}

function RootAdmin() {
  return <AdminAccountProvider>
    <Admin />
  </AdminAccountProvider>
}

function PageError() {
  const error: any = useRouteError()
  console.log(error)

  return <>
    <h1>Une erreur est survenue !</h1>
    <p>
      {error?.error?.toString() ?? error?.toString()}
    </p>
  </>
}

function App() {
  return <RouterProvider router={router} />
}

export default App
