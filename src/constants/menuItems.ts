import { 
  SvgIconComponent, 
  Home as HomeIcon,
  Info as InfoIcon
} from '@mui/icons-material'

interface MenuItem  {
  path:  string;
  icon: SvgIconComponent;
  title: string
}

const menuItems: MenuItem[] = [
  {
    path: 'home',
    icon: HomeIcon,
    title: 'Home'
  }, 
  {
    path: 'about',
    icon: InfoIcon,
    title: 'About'
  }, 
]

export default menuItems;