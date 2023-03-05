import { Box, Typography } from '@mui/material'

function PageTitle({ title }) {
  return (
    <Box
      style={{
        width: '100%',
        borderBottom: '1px solid #e5e5e5',
        padding: '1rem 0 1rem',
        marginBottom: '1.5rem',
      }}
    >
      <Typography variant="h6" style={{ userSelect: 'none' }}>
        {title}
      </Typography>
    </Box>
  )
}

export default PageTitle
