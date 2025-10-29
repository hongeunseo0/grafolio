
import { RouteObject } from 'react-router-dom';
import Home from '../pages/home/page';
import Community from '../pages/community/page';
import Upload from '../pages/upload/page';
import NotFound from '../pages/NotFound';
import Mockup from '../pages/mockup/page';
import Moodboard from '../pages/moodboard/page';
// ----------------------------------------------------
// 💡 추가 필요: 갤러리 페이지 컴포넌트 임포트
// 파일 경로가 다를 경우, 실제 파일 경로로 수정해 주세요.
import Gallery from '../pages/gallery/page'; 
// ----------------------------------------------------

const routes: RouteObject[] = [
  {
path: '/',
    element: <Home />
  },
  // ----------------------------------------------------
  // 💡 추가 필요: 포트폴리오 갤러리 경로
  {
    path: '/gallery', 
    element: <Gallery /> 
  },
  // ----------------------------------------------------
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
