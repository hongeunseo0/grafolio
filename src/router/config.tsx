
import { RouteObject } from 'react-router-dom';
import Home from '../pages/home/page';
import Community from '../pages/community/page';
import Upload from '../pages/upload/page';
import NotFound from '../pages/NotFound';
import Mockup from '../pages/mockup/page';
import Moodboard from '../pages/moodboard/page';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/community',
    element: <Community />
  },
  {
    path: '/upload',
    element: <Upload />
  },
  {
    path: '/mockup',
    element: <Mockup />
  },
  {
    path: '/moodboard',
    element: <Moodboard />
  },
  {
    path: '*',
    element: <NotFound />
  }
];

export default routes;
