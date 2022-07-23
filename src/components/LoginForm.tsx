import { 
  Button,
  Paper,
  Stack,
  TextField,
  Typography 
} from '@mui/material'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'

const LoginForm = () => {
  const navigate = useNavigate()
  let authContext = useContext(AuthContext)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (name: string, pwd: string) => {
    if (authContext) {
      authContext.setUser({
        username: name,
        token: true
      })
      navigate('/home', {replace: true})
    }
  }

  return (
    <Paper
      elevation={3}
      square
      sx={{ padding: '100px 30px', minWidth: '300px', width: { xs: '100%', md: '300px' } }}
    >
      <Stack
        height='100%'
        alignItems='center'
        spacing={3}
      >
        <Typography variant='h4' component='h2' color='primary'>
          Login Form
        </Typography>
        <TextField 
          value={username} onChange={e => setUsername(e.target.value)}
          fullWidth type='text' label='Username' required
        />
        <TextField 
          value={password} onChange={e => setPassword(e.target.value)}
          fullWidth type='password' label='Password' required 
        />
        <Button 
          fullWidth variant='contained' disabled={!(username && password)}
          onClick={() => handleLogin(username, password)}
        >
          Login
        </Button>
      </Stack>
    </Paper>
  )
}

export default LoginForm