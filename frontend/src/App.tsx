import './assets/css/App.scss'
import { Outlet, RouterProvider, createBrowserRouter, useRouteError } from 'react-router-dom'
import Home from './_components/Home'
import Header from './_components/layouts/Header'
import Footer from './_components/layouts/Footer';
import Projects from './_components/Projects';
import Cv from './_components/Cv';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCamera, faDumbbell, faMusic, fas } from '@fortawesome/free-solid-svg-icons';
import CvPaper from './_components/CvPaper';

library.add(fas, faCamera, faMusic, faDumbbell);

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
        path: '/projects',
        element: <Projects />,
      },
      {
        path: '/cv',
        element: <Cv />,
      },
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
