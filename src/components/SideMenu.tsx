import { 
  Box, 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton,
  ListItemText, 
  Toolbar,
  Typography
} from '@mui/material'
import menuItems from '../constants/menuItems'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'


interface SideMenuProps {
  drawerOpen: boolean,
  handleDrawerToggle: () => void
}

const drawerWidth = 240

const SideMenu = ({ drawerOpen, handleDrawerToggle }: SideMenuProps) => {
  let location = useLocation()
  const [ selectedMenu, setSelectedMenu ] = useState('')

  useEffect(() => {
    const parts  = location.pathname.split('/')
    setSelectedMenu(parts[1] === '' ? 'home' : parts[1])
  }, [location])

  
  const drawer = (
    <div>
      <Toolbar />
      <List disablePadding>
        {menuItems.map(item => {
          const { path, icon: ItemIcon, title} = item

          return (
            <ListItem 
              key={title} 
              component={Link}
              button
              to={`/${path}`}
              disablePadding
            >
              <ListItemButton selected={selectedMenu === path}>
                <ItemIcon color='primary' />
                <ListItemText
                  primary={<Typography variant='h5' component='span' color={'primary.main'}>{title}</Typography>} 
                  sx={{ marginLeft: '4px' }}
                />
              </ListItemButton>
            </ListItem>
          )
        })}
      </List>
    </div>
  )

  return (
    <Box 
      component='nav'
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }, display: drawerOpen ? 'block' : 'none', }}
    >
      <Drawer
        variant='temporary'
        open={drawerOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant='permanent'
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  )
}

export default SideMenu