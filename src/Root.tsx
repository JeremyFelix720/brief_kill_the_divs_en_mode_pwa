import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Game from './pages/Game'
import End from './pages/End'

export default function Root() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/game",
      element: <Game />,
    },
    {
      path: "/end",
      element: <End />,
    },
  ])
  
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}