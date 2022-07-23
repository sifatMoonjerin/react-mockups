import { Box } from '@mui/material'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import SideMenu from '../components/SideMenu'

const PortalLayout = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen)
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <NavBar handleDrawerToggle={handleDrawerToggle} />
      <Box sx={{ display: 'flex' }}>
        <SideMenu
          drawerOpen={drawerOpen} 
          handleDrawerToggle={handleDrawerToggle}
        />
        <Outlet />  
      </Box>
    </Box>
  )
}

export default PortalLayout
