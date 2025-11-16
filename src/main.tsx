import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './components/Home/Home.tsx'
import About from './components/About/About.tsx'
import Work from './components/Work/Work.tsx'
import Projects from './components/Projects/Projects.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/work',
        element: <Work />,
      },
      {
        path: '/projects',
        element: <Projects />,
      },
    ],
  },
])
createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
