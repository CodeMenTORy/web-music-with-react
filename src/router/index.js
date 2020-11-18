import Discover from '@/pages/discover';
import Mine from '@/pages/mine';
import Friend from '@/pages/friend';
import { Redirect } from 'react-router-dom';
import Recommend from '../pages/discover/children-pages/recommend/idnex';
import Ranking from '../pages/discover/children-pages/ranking/idnex';
import Songs from '../pages/discover/children-pages/songs/idnex';
import Djradio from '../pages/discover/children-pages/djradio/idnex';
import Artist from '../pages/discover/children-pages/artist/idnex';
import Album from '../pages/discover/children-pages/album/idnex';

const routes = [
  {
    path: '/',
    exact: true,
    render: () => <Redirect to="/discover/recommend" />,
  },
  {
    path: '/discover',
    component: Discover,
    routes: [
      {
        path: '/discover/recommend',
        component: Recommend,
      },
      {
        path: '/discover/ranking',
        component: Ranking,
      },
      {
        path: '/discover/songs',
        component: Songs,
      },
      {
        path: '/discover/djradio',
        component: Djradio,
      },
      {
        path: '/discover/artist',
        component: Artist,
      },
      {
        path: '/discover/album',
        component: Album,
      },
    ],
  },
  {
    path: '/mine',
    component: Mine,
  },
  {
    path: '/friend',
    component: Friend,
  },
];

export default routes;
