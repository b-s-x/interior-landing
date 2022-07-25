import { useRoutes } from "react-router-dom";
import { Home } from '@/pages/Home'
import { About } from '@/pages/About'
import { Services } from '@/pages/Services'
import { Pages } from '@/pages/Pages'
import { Contacts } from '@/pages/Contacts'
import { paths } from '@/constants/routes';

export default function Router() {
  return useRoutes([
    {
      path: paths.home,
      element: <Home />,
    },
    {
      path: paths.about,
      element: <About />,
    },
    {
      path: paths.services,
      element: <Services />,
    },
    {
      path: paths.pages,
      element: <Pages />,
    },
    {
      path: paths.contacts,
      element: <Contacts />,
    },
  ]);
};
