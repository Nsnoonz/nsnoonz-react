
import { lazy } from "react"
const Home = lazy(() => import('../pages/PageHome'));
const Contact = lazy(() => import('../pages/Contact'));
const About = lazy(() => import('../pages/Resume/About'))
const ErrorPage = lazy(() => import('../pages/PageError'))
const routes = [
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
    layout: ''
  },
  {
    path: '/Index',
    element: <Home />,
    errorElement: <ErrorPage />,
    layout: ''
  },
  {
    path: '/About',
    element: <About />,
    errorElement: <ErrorPage />,
    layout: ''
  },
  {
    path: '/Contact',
    element: <Contact />,
    errorElement: <ErrorPage />,
    layout: ''
  }
]

export { routes }