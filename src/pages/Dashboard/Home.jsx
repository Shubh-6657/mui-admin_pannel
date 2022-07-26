import { Box, Typography } from '@mui/material'

const Home = () => {
  return (
    <Box style={{ borderBottom: '1px solid #eee', padding: '1rem 0 1rem' }}>
      <Typography variant="h6" style={{ userSelect: 'none' }}>
        Welcome to your dashboard 👋
      </Typography>
    </Box>
  )
}

export default Home
