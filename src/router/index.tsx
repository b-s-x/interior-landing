import { useRoutes } from "react-router-dom";
import { Main } from '@/pages/Main'
import { About } from '@/pages/About'

export default function Router() {
  const routes = useRoutes([
    {
        path: '/',
        element: <Main />,
    },
    {
        path: '/about',
        element: <About />,
    },
  ]);
  return routes;
}