import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem
} from '@mui/material'
import { 
  Menu as MenuIcon, 
  AccountCircle 
} from '@mui/icons-material'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'


interface NavBarProps {
  handleDrawerToggle: () => void
}

const NavBar = ({ handleDrawerToggle }: NavBarProps) => {
  const navigate = useNavigate()
  let authContext = useContext(AuthContext)

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleNavigation = (path: string) => {
    handleClose()
    navigate(`/${path}`)
  }

  const handleLogout = () => {
    if (authContext) {
      authContext.setUser(null)
    }
    handleNavigation('login')
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <AppBar 
      position='static'
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1
      }}
    >
      <Toolbar>
        <IconButton
          size='large'
          edge='start'
          color='inherit'
          aria-label='menu'
          sx={{ mr: 2 }}
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          Demo app
        </Typography>
        <IconButton
          size='large'
          aria-label='account of current user'
          aria-controls='menu-appbar'
          aria-haspopup='true'
          onClick={handleMenu}
          color='inherit'
        >
          <AccountCircle />
        </IconButton>
        <Menu 
          id='menu-appbar'
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={() => handleNavigation('profile')} sx={{ width: 120 }}>
            Profile
          </MenuItem>
          <MenuItem onClick={handleLogout} sx={{ width: 120 }}>
            Logout
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar