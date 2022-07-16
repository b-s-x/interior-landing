import { useRoutes } from "react-router-dom";
import { Home } from '@/pages/Home'
import { About } from '@/pages/About'

export default function Router() {
  const routes = useRoutes([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/about',
        element: <About />,
    },
  ]);
  return routes;
}