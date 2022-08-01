import {
  People,
  PersonCircle,
  BarChartFill,
  Github,
  PeopleFill,
  PersonFill,
  HouseDoorFill,
  InfoCircleFill,
  List as ListIcon,
  PencilFill
} from 'react-bootstrap-icons'

export const drawerItems = [
  {
    title: 'Home',
    path: '/',
    icon: <HouseDoorFill />
  },
  {
    title: 'Users',
    path: '/users',
    icon: <PeopleFill />
  },
  {
    title: 'Forms',
    path: '/forms',
    icon: <PencilFill />
  },
  {
    title: 'Analytics',
    path: '/Analytics',
    icon: <BarChartFill />
  },
  // {
  //   title: 'Account',
  //   path: '/account',
  //   icon: <PersonCircle />
  // },
  {
    title: 'About',
    path: '/about',
    icon: <InfoCircleFill />
  }
]
