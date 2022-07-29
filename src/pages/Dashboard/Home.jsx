import { Box, Button, Grid, Paper, Typography } from '@mui/material'
import { styled, useTheme } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { summaryItems, homeTableRows, homeShortcutItems } from '../../temp/home'
import { BoxArrowUpRight, InfoCircle } from 'react-bootstrap-icons'

const Home = () => {
  const theme = useTheme()

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14
    }
  }))

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover
    },
    '&:last-child td, &:last-child th': {
      border: 0
    }
  }))

  return (
    <>
      <Grid
        xs={12}
        style={{
          borderBottom: '1px solid #eaeaea',
          padding: '1rem 0 1rem',
          marginBottom: '1.5rem'
        }}
      >
        <Typography variant="h6" style={{ userSelect: 'none' }}>
          Welcome to your dashboard 👋
        </Typography>
      </Grid>
      <Grid container spacing={3}>
        {summaryItems &&
          summaryItems.map((item, index) => {
            return (
              <Grid item xs={3} key={'summary item ' + index}>
                <Box
                  sx={{
                    padding: 2,
                    border: '1px solid #eaeaea',
                    backgroundColor: '#fff',
                    borderRadius: '4px'
                  }}
                >
                  <Typography
                    variant="body2"
                    style={{
                      color: '#999',
                      userSelect: 'none'
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    noWrap
                    variant="h6"
                    fontWeight={'bold'}
                    style={{
                      userSelect: 'none',
                      marginTop: '.25rem'
                    }}
                  >
                    {item.value}
                  </Typography>
                  <Typography
                    noWrap
                    variant="body2"
                    style={{
                      color: '#888',
                      userSelect: 'none',
                      marginTop: '.25rem'
                    }}
                  >
                    You've gained{' '}
                    <span style={{ color: theme.palette.primary.main }}>
                      {item.increasedBy}
                    </span>{' '}
                    this week
                  </Typography>
                </Box>
              </Grid>
            )
          })}
      </Grid>
      {/* ================================================= */}
      <Grid container spacing={3} style={{ marginTop: '1rem' }}>
        <Grid item xs={8}>
          <TableContainer
            component={Paper}
            elevation={0}
            style={{ border: '1px solid #eaeaea' }}
          >
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Dessert (100g serving)</StyledTableCell>
                  <StyledTableCell align="right">Calories</StyledTableCell>
                  <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
                  <StyledTableCell align="right">
                    Carbs&nbsp;(g)
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    Protein&nbsp;(g)
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {homeTableRows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.calories}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.fat}</StyledTableCell>
                    <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                    <StyledTableCell align="right">
                      {row.protein}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={4}>
          <Box
            sx={{
              display: 'none',
              padding: 2,
              border: '1px solid #eaeaea',
              backgroundColor: '#fff',
              borderRadius: '4px'
            }}
          >
            <Typography
              variant="body2"
              style={{
                color: '#888',
                userSelect: 'none'
              }}
            >
              mooi
            </Typography>
            <Typography
              noWrap
              variant="h6"
              fontWeight={'bold'}
              style={{
                userSelect: 'none',
                marginTop: '.5rem'
              }}
            >
              noice
            </Typography>
            <Typography
              noWrap
              variant="body2"
              style={{
                color: '#888',
                userSelect: 'none',
                marginTop: '.5rem'
              }}
            >
              You've gained
            </Typography>
          </Box>
        </Grid>
      </Grid>
      {/* ============================================= */}

      <Grid container spacing={3} style={{ marginTop: '1rem' }}>
        {homeShortcutItems &&
          homeShortcutItems.map((item, index) => {
            return (
              <Grid item xs={6} key={'helpful info' + index}>
                <Box
                  sx={{
                    padding: 2,
                    border: '1px solid #eaeaea',
                    backgroundColor: '#fff',
                    borderRadius: '4px'
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        width: '1.5rem',
                        heigth: '3rem',
                        color: theme.palette.primary.main
                      }}
                    >
                      {item.cardIcon}
                    </Box>
                    <Typography
                      variant="subtitle1"
                      style={{
                        color: theme.palette.primary.main,
                        userSelect: 'none'
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Box>
                  <Typography
                    noWrap
                    variant="subtitle1"
                    fontWeight={'bold'}
                    style={{
                      userSelect: 'none',
                      marginTop: '.5rem'
                    }}
                  >
                    {item.subtitle}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    style={{
                      color: '#888',
                      userSelect: 'none',
                      marginTop: '.5rem'
                    }}
                  >
                    {item.text}
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      marginTop: '1rem'
                    }}
                  >
                    <Button
                      variant="contained"
                      disableElevation
                      style={{ textTransform: 'none' }}
                      endIcon={item.buttonIcon}
                    >
                      {item.buttonTitle}
                    </Button>
                  </Box>
                </Box>
              </Grid>
            )
          })}
      </Grid>
    </>
  )
}

export default Home
