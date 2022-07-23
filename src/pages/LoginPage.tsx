import { 
  Box,
  Stack,
  Typography
} from '@mui/material'
import LoginForm from '../components/LoginForm'

const LoginPage = () => {
  return (
      <Stack
        direction='row'
        alignItems='stretch'
        height='100%'
      >
        <Box
            sx={{ flexGrow: 1, padding: '100px', display: { xs: 'none', md: 'block' } }}
        >
          <Typography variant='h3' component='h1' color='primary'>
            Welcome to demo app
          </Typography>
          <Typography variant='body1' align='justify' color='primary'>
            This is a demo application. This is a demo application. This is a demo application. This is a demo application. This is a demo application. This is a demo application. This is a demo application. This is a demo application. This is a demo application. This is a demo application. This is a demo application.
          </Typography>
        </Box>
        <LoginForm></LoginForm>
      </Stack>
  )
}

export default LoginPage