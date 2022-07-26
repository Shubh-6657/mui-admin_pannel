import { Box, Grid, Paper, Typography } from '@mui/material'
import { styled, useTheme } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

const Home = () => {
  const theme = useTheme()

  const summaryItems = [
    {
      title: 'Total Page Views',
      value: '2,519,208',
      percentageIncrease: '',
      increasedBy: '17,523'
    },
    {
      title: 'Total Users',
      value: '78,250',
      percentageIncrease: '',
      increasedBy: '419'
    },
    {
      title: 'Total Orders',
      value: '18,800',
      percentageIncrease: '',
      increasedBy: '62'
    },
    {
      title: 'Total Sales',
      value: '$35,078',
      percentageIncrease: '',
      increasedBy: '$4,703'
    }
  ]

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14
    }
  }))

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0
    }
  }))

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein }
  }

  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9)
  ]

  return (
    <>
      <Grid
        xs={12}
        style={{
          borderBottom: '1px solid #eee',
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
                    // border: '1px solid #eee',
                    boxShadow: '0 2px 4px -3px #000',
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
                    {item.title}
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
                    {item.value}
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
          <TableContainer component={Paper}>
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
                {rows.map((row) => (
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
              padding: 2,
              // border: '1px solid #eee',
              boxShadow: '0 2px 4px -3px #000',
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
        <Grid item xs={6}>
          <Box
            sx={{
              padding: 2,
              // border: '1px solid #eee',
              boxShadow: '0 2px 4px -3px #000',
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
        <Grid item xs={6}>
          <Box
            sx={{
              padding: 2,
              // border: '1px solid #eee',
              boxShadow: '0 2px 4px -3px #000',
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
    </>
  )
}

export default Home
