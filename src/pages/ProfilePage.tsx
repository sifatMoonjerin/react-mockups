import { 
  Box,
  Typography
} from '@mui/material'

const ProfilePage = () => {
  return (
    <Box sx={{padding: '16px'}}>
      <Typography variant='h3' color='primary'>
        Profile Page
      </Typography>
      <Typography variant='h6'>
        Username: uname
      </Typography>
    </Box>
  )
}

export default ProfilePage