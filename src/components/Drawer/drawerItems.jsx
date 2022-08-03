import {
  People,
  PersonCircle,
  BarChartFill,
  Github,
  PeopleFill,
  PersonFill,
  HouseDoorFill,
  InfoCircleFill,
  GearFill,
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
    title: 'Customers',
    path: '/customers',
    icon: <PeopleFill />
  },
  {
    title: 'Forms',
    path: '/forms',
    icon: <PencilFill />
  },
  {
    title: 'Charts',
    path: '/charts',
    icon: <BarChartFill />
  },
  {
    title: 'Profile',
    path: '/profile',
    icon: <PersonCircle />
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: <GearFill />
  }
  // {
  //   title: 'About',
  //   path: '/about',
  //   icon: <InfoCircleFill />
  // }
]
