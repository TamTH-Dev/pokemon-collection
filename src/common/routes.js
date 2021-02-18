import DashboardIcon from '@material-ui/icons/Dashboard'
import CameraIcon from '@material-ui/icons/Camera'

const routes = [
  {
    path: '/',
    name: 'Home',
    scope: [],
  },
  {
    path: '/cards',
    name: 'Cards',
    scope: ['sideBar'],
    icon: <DashboardIcon />,
  },
  {
    path: '/types',
    name: 'Types',
    scope: ['sideBar'],
    icon: <CameraIcon />,
  },
]

export default routes
