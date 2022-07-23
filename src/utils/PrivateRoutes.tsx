import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'

const PrivateRoutes = () => {
  let authContext = useContext(AuthContext)

  return (
    authContext?.user?.token ? <Outlet/> : <Navigate to='/login'/>
  )
}

export default PrivateRoutes